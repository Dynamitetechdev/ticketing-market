import Link from "next/link";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
const Header = () => {
  return (
    <div className="header">
      <nav className="flex absolute justify-start content-center flex-wrap items-center gap-0.5 border-b p-6 ">
        <p className="text-4xl font-bold ">Sfn Market</p>
        <div className="flex mt-4">
          <Link legacyBehavior href="/">
            <a className=" mr-4 text-black-500">Home</a>
          </Link>
          <Link legacyBehavior href="/createNft">
            <a className="mr-6 text-black-500">Create NFT</a>
          </Link>
          <Link legacyBehavior href="/myNfts">
            <a className="mr-6 text-black-500">My NFTs</a>
          </Link>
        </div>
        <div className="flex gap-0.5 m-auto mt-4 text-white rounded p-4">
          <Web3Button icon="show" label="Connect Wallet" balance="hide" />
          <Web3NetworkSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Header;
