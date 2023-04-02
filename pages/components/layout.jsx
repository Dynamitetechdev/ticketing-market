import { Web3Modal } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import Header from "./header";

const Layout = ({ children }) => {
  // 1. Get projectID at https://cloud.walletconnect.com
  // if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  //   throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
  // }
  const projectId = "9f101f0d8cb92d8e24932d8b41c5f7b2";

  // 2. Configure wagmi client
  const chains = [polygonMumbai];

  const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider,
    theme: {
      background: "rgb(39, 49, 56)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)",
    },
  });
  // 3. Configure modal ethereum client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  return (
    <div className="layout">
      <WagmiConfig client={wagmiClient}>
        <Header />
        {children}
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-font-family": "Roboto, sans-serif",
          "--w3m-accent-color": "black",
          "--w3m-accent-fill-color": "white",
          "--w3m-background-color": "green",
        }}
      />
    </div>
  );
};

export default Layout;
