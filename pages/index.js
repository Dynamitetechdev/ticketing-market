import Image from "next/image";
import Link from "next/link";
import ListedTokens from "./components/UI/listedTokens";

export default function Home() {
  return (
    <div>
      <div className="wrapper bg">
        <div className="home_banner">
          <div className="left">
            <h1 className="">
              NFT marketplace for <span className="yellow">Art</span> , <br />{" "}
              <span className="yellow">Event tickets</span> and More
            </h1>
            <p className="">
              Unleash your potential by creating and tokenizing your assets{" "}
              <br /> Mint your assets to the blockchain,List your assets for
              sell
            </p>

            <Link href="#">
              <button className="btn createBtn">Create</button>
            </Link>
          </div>

          <div className="right">
            <Image width={508} height={634} src="/assets/bg/bg.png" />
          </div>
        </div>
      </div>
      <ListedTokens />
    </div>
  );
}
