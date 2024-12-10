import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";
import { ITask, ITaskDTO } from "../interfaces";

class Database {
  private static instance: Database;
  private dbPath: string;

  constructor() {
    this.dbPath = path.resolve(__dirname, "db.json");
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  private loadDatabase(): { tasks: ITask[] } {
    try {
      const data = fs.readFileSync(this.dbPath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error loading database", error);
      return { tasks: [] };
    }
  }

  private saveDatabase(data: { tasks: ITask[] }) {
    try {
      fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error saving database", error);
    }
  }

  public listTASKS(): ITask[] {
    const { tasks } = this.loadDatabase();
    return tasks;
  }

  public findTaskById(id: string): ITask | undefined {
    const { tasks } = this.loadDatabase();
    return tasks.find((task) => task.id === id);
  }

  public createTask(task: ITaskDTO) {
    const data = this.loadDatabase();
    const newTask: ITask = {
      ...task,
      id: randomUUID(),
      completedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    data.tasks.push(newTask);
    this.saveDatabase(data);
  }

  public updateTask(id: string, task: ITaskDTO) {
    const data = this.loadDatabase();
    const taskIndex = data.tasks.findIndex((task) => task.id === id);
    data.tasks[taskIndex] = {
      ...data.tasks[taskIndex],
      ...task,
      updatedAt: new Date(),
    };
    this.saveDatabase(data);
  }

  public completeTask(id: string) {
    const data = this.loadDatabase();
    const taskIndex = data.tasks.findIndex((task) => task.id === id);
    data.tasks[taskIndex].completedAt = new Date();
    this.saveDatabase(data);
  }

  public deleteTask(id: string) {
    const data = this.loadDatabase();
    const taskIndex = data.tasks.findIndex((task) => task.id === id);
    data.tasks.splice(taskIndex, 1);
    this.saveDatabase(data);
  }
}

export default Database;
