import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  WagmiProvider,
} from "wagmi";
import { config } from "../config";
import GetUSDTContractBalance from "./GetUSDTContractBalance";
import ConnectToWallet from "./ConnectToWallet";

const client = new QueryClient();

function App() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <ConnectToWallet />
        <GetUSDTContractBalance />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;