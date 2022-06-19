import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/index.scss";

const container = document.getElementById("root");
const rootContainer = createRoot(container);

rootContainer.render(<App />);
