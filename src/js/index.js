import { createRoot } from "react-dom/client";
import { getStorage } from "./storage";
import App from "./components/App";

const container = document.getElementById("app");
const root = createRoot(container);

const toDos = getStorage();
root.render(<App toDos={toDos} />);
