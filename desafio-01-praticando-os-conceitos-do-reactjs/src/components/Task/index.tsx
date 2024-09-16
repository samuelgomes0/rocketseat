import { DeleteButton } from "../DeleteButton";

type TaskProps = {
  id: number;
  content: string;
  isChecked: boolean;
  onTaskChecked: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export function Task({
  id,
  content,
  isChecked,
  onTaskChecked,
  onDeleteTask,
}: TaskProps) {
  const markTaskAsChecked = () => {
    onTaskChecked(id);
  };

  const deleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <li className="flex justify-between rounded-lg bg-gray-500 p-6">
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={markTaskAsChecked}
        />
        <span className={isChecked ? "text-gray-400 line-through" : ""}>
          {content}
        </span>
      </div>
      <button onClick={deleteTask}>
        <DeleteButton />
      </button>
    </li>
  );
}
