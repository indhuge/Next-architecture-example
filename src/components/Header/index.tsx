import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Button from "../Button";

export default function Header() {
  return (
    <header className="w-full h-fit bg-blue-primary grid grid-cols-2">
      <Image className="py-2 self-start w-60" src={logo} alt="Ind[huge] logo" />
    </header>
  );
}
