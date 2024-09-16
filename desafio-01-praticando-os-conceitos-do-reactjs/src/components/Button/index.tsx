import { IconPlus } from "@tabler/icons-react";

type ButtonProps = {
  onClick(): void;
};

export function Button({ onClick }: ButtonProps) {
  return (
    <button
      className="flex items-center gap-2 rounded-lg bg-blue-dark p-4 text-sm font-bold hover:bg-blue"
      onClick={onClick}
    >
      Criar
      <IconPlus className="rounded-full border" size={16} />
    </button>
  );
}
