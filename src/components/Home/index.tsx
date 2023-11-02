"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import Button from "../Button";
import { animate, motion } from "framer-motion";

export default function Home() {
  const messages = [
    "Esse site segue os padrões de desenvolvimento da Ind[huge]",
    "Bem vindo a industria 4.0",
  ];
  const [text, setText] = useState<String>(messages[0]);
  const [count, setCount] = useState(0);

  const onClick: MouseEventHandler = () => {
    setText(messages[count]);
    setCount(count == messages.length - 1 ? 0 : count + 1);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
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
              duration: 0.3,
            },
          },
          hide: {
            y: -20,
            opacity: 0,
          },
        }}
      >
        <h1>{text}</h1>
      </motion.div>
      <Button
        className="py-3 px-7 bg-slate-600 rounded hover:bg-white hover:text-black transition-colors duration-300"
        text="Click me"
        onClick={onClick}
      />
    </div>
  );
}
