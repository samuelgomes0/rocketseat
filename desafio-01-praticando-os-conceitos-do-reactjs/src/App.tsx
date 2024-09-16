import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function App() {
  return (
    <div className="h-screen w-full bg-gray-600 text-gray-100">
      <Header />
      <Main />
    </div>
  );
}
