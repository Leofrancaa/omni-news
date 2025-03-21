import LogoImage from "../../public/assets/images/logo3.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative w-[50px] h-[50px]">
        <Image alt={""} fill className="object-contain" src={LogoImage}></Image>
      </div>
      <h1 className="orbitron-text text-[2.5rem]">Omni news</h1>
    </div>
  );
}
