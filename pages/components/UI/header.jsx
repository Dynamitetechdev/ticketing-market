import Link from "next/link";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useState } from "react";
import { Bars2Icon } from "@heroicons/react/24/solid";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header">
      <h1 className="font-bold">Sfn Market</h1>
      <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
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
        <div onClick={() => setOpen(!open)} className="button desktop">
          <button>Connect Wallet</button>
        </div>
        <div className={open ? "connectBtn" : "connectBtn close"}>
          <div className="firstBtn">
            <Web3Button icon="show" label="Connect Wallet" balance="hide" />
          </div>
          <div className="secondBtn">
            <Web3NetworkSwitch />
          </div>
        </div>
      </nav>
      <Bars2Icon className="mobile-menu" onClick={handleMenuClick} />
    </div>
  );
};

export default Header;
