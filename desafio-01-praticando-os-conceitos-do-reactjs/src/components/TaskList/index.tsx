import { IconClipboardList } from "@tabler/icons-react";
import { ITask } from "../../interfaces/ITask.interface";
import { Task } from "../Task";

type TaskListProps = {
  tasks: ITask[];
  taskAmount: number;
  finishedTasks: number;
  onTaskChecked: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
};

export function TaskList({
  tasks,
  taskAmount,
  finishedTasks,
  onTaskChecked,
  onDeleteTask,
}: TaskListProps) {
  return (
    <section className="w-full max-w-screen-md">
      <header className="mt-4 flex justify-between border-b border-gray-400 py-6">
        <p className="font-bold text-blue">
          Tarefas criadas{" "}
          <span className="ml-1 rounded-full bg-gray-400 px-2 py-1 text-gray-100">
            {taskAmount}
          </span>
        </p>
        <p className="font-bold text-purple">
          Concluídas{" "}
          <span className="ml-1 rounded-full bg-gray-400 px-2 py-1 text-gray-100">
            {finishedTasks}
          </span>
        </p>
      </header>
      <ul className="flex flex-col gap-4">
        {taskAmount > 0 ? (
          tasks.map(({ id, content, isChecked }) => (
            <Task
              key={id}
              id={id}
              content={content}
              isChecked={isChecked}
              onTaskChecked={onTaskChecked}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <IconClipboardList className="mb-2 mt-12 text-gray-400" size={72} />
            <p className="font-bold text-gray-200">
              Você ainda não tem tarefas cadastradas
            </p>
            <p className="text-gray-300">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </ul>
    </section>
  );
}
