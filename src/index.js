import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
require('@solana/wallet-adapter-react-ui/styles.css');


const network = WalletAdapterNetwork.Devnet;

const wallets = [
  new SolflareWalletAdapter(),
  new PhantomWalletAdapter()
];

let endpoint = clusterApiUrl(network);

console.log(Buffer);

ReactDOM.render(
  <React.StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true} >
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode >,
  document.getElementById("root")
);

