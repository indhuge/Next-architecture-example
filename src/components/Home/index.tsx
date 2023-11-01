"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState<String>(
    "Esse site segue os padrões de desenvolvimento da Ind[huge]"
  );

  return (
    <div className="flex items-center justify-center h-full">
      <h1>{text}</h1>
    </div>
  );
}
