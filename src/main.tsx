import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { reconnect } from "wagmi/actions";
import { injected } from "wagmi/connectors";
import { config } from "./config.tsx";


import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-PKXMCSFZ",
};

TagManager.initialize(tagManagerArgs);

reconnect(config, { connectors: [injected()] });

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
