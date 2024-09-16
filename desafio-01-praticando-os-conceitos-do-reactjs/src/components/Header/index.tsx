import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className="flex h-52 w-full flex-col items-center justify-center bg-gray-700">
      <img src={Logo}></img>
    </header>
  );
}
