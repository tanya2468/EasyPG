import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App/App";
import "./index.css";

// import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// import context
import { RoomProvider } from "./Context/Context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>
);

