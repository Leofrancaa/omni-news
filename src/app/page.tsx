import Header from "../components/header";
import BgImage from "../../public/assets/images/new-york-1867569.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <div className="relative w-[100vw] h-[100vh]">
        <Image src={BgImage} fill alt={""}></Image>
      </div>
    </div>
  );
}
