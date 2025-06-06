import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add global CSS for Inter font
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Inter', sans-serif;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
