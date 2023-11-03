"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import Button from "../Button";
import { animate, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const messages = [
    "Esse site segue os padrões de desenvolvimento da Ind[huge]",
    "Bem vindo a industria 4.0",
  ];
  const [text, setText] = useState<String>(messages[0]);
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count == messages.length - 1 ? 0 : count + 1);
    setText(messages[count]);
  }, 2000);

  const onClick: MouseEventHandler = () => {};

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full bg-gradient-to-bl from-[#001E71] to-[#36FB7B]">
      <motion.div
        key={text.toString()}
        initial="hide"
        animate={"show"}
        variants={{
          show: {
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.5,
            },
          },
          hide: {
            y: -20,
            opacity: 0,
          },
        }}
      >
        <h1 className="text-3xl">{text}</h1>
      </motion.div>
      <div className="flex flex-row gap-2">
        <Link className="btn-primary" href="/teste" prefetch={true}>
          Navegar
        </Link>
      </div>
    </div>
  );
}
