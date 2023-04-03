// import { useState, useEffect } from "react";
// import { useAccount, useContract, useSigner } from "wagmi";
import "../styles/globals.css";
import "../styles/global.scss";
import "../styles/responsive.scss";
import Layout from "./components/layout";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
