import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

const root = createRoot(document.getElementById("root"));
root.render(
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
);
