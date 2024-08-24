import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store.tsx";
import { Provider } from "react-redux";
import { PrimeReactProvider } from 'primereact/api';
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </StrictMode>
);
