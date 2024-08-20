import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes"; // Đảm bảo rằng đường dẫn đúng
import reportWebVitals from "./reportWebVitals";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { reduxStore } from "./store/store.js";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
const { store, persistor } = reduxStore();
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <Router>
          <AppRoutes />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

reportWebVitals();
