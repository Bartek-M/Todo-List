import { createRoot } from "react-dom/client";

import App from "./App";


const root = createRoot(document.getElementById("appMount") as HTMLElement);
root.render(<App />);