import ReactDOM from "react-dom";
import SearchWidget from "./App";

const initWidget = (selector) => {
  const container = document.querySelector(selector);
  if (container) {
    ReactDOM.createRoot(container).render(<SearchWidget />);
  } else {
    console.error(`Container with selector '${selector}' not found.`);
  }
};

// Expose the init function globally on the window object
window.SearchWidget = { init: initWidget };
