import { useState } from "react";
import { ITask } from "../../interfaces/ITask.interface";
import { Button } from "../Button";
import { Input } from "../Input";
import { TaskList } from "../TaskList";

export function Main() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  const numberOfTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isChecked).length;

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleCreateTask = () => {
    if (!inputValue) return;

    const newTask: ITask = {
      id: new Date().getTime(),
      content: inputValue,
      isChecked: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setInputValue("");
  };

  const handleTaskChecked = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-md -translate-y-2/4 transform items-center gap-2">
        <Input inputValue={inputValue} onInputChange={handleInputChange} />
        <Button onClick={handleCreateTask} />
      </div>
      <TaskList
        tasks={tasks}
        taskAmount={numberOfTasks}
        finishedTasks={completedTasks}
        onTaskChecked={handleTaskChecked}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}
