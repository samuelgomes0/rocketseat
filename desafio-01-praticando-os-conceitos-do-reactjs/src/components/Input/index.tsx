interface InputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
}

export function Input({ inputValue, onInputChange }: InputProps) {
  const handleOnTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <input
      className="h-14 w-full rounded-lg bg-gray-500 p-4 outline-none focus:outline-purple-dark"
      type="text"
      value={inputValue}
      placeholder="Adicione uma nova tarefa"
      onChange={handleOnTyping}
    />
  );
}
