import Image from "next/image";
import logo from "../../../public/logo.png";

export default function About() {
  return (
    <div className="">
      <h1>Ind[huge]</h1>
      <Image
        src={logo}
        width={500}
        alt="Ind[huge] logo"
        className="float-right"
      />
      <p className="text-justify w-1/2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab omnis
        saepe quisquam quam ullam, error magnam animi temporibus nostrum tenetur
        porro! Dignissimos rerum iure voluptatibus, maxime obcaecati maiores
        animi.
      </p>
      <h1>O que fazemos ?</h1>
      <p className="text-justify w-1/2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab omnis
        saepe quisquam quam ullam, error magnam animi temporibus nostrum tenetur
        porro! Dignissimos rerum iure voluptatibus, maxime obcaecati maiores
        animi.
      </p>
    </div>
  );
}
