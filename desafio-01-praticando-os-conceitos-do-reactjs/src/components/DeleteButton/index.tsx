import { IconTrash } from "@tabler/icons-react";

export function DeleteButton() {
  return (
    <button>
      <IconTrash
        className="text-gray-300 hover:bg-gray-400 hover:text-danger"
        size={20}
      />
    </button>
  );
}
