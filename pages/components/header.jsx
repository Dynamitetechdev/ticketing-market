import Link from "next/link";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useState } from "react";
import { Bars2Icon } from "@heroicons/react/24/solid";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => {};
  return (
    <div className="header">
      <nav className="navigation">
        <h1 className="font-bold">Sfn Market</h1>
        <div className="">
          <ul>
            <li>
              <Link legacyBehavior href="/">
                Home
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/createNft">
                Create NFT
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/myNfts">
                My NFTs
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className="button">
          <button>Connect Wallet</button>
        </div>
        <div className={open ? "connectBtn" : "connectBtn close"}>
          <Web3Button
            icon="show"
            label="Connect Wallet"
            balance="hide"
            className="firstBtn"
          />
          <Web3NetworkSwitch className="secondBtn" />
        </div>
        <Bars2Icon className="mobile-menu" onClick={handleMenuClick} />
      </nav>
    </div>
  );
};

export default Header;
