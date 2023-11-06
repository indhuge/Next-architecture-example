"use client";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import Button from "../Button";
import { RequestAreaValue } from "./actions";
import { CircleAreaResult } from "@/app/api/circle-area/route";

export default function Circle() {
  const [radius, setRadius] = useState(0);
  const [result, setResult] = useState<String>();

  const onChanged: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRadius(parseInt(event.target.value));
  };
  const onClickHandle: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const res: CircleAreaResult = await RequestAreaValue(radius);
    console.log(res);
    setResult(`Resultado: ${res}`);
  };
  return (
    <div className="w-full flex content-center flex-col">
      <h1>Calcular area:</h1>
      <div className="grid grid-cols-3 gap-2 w-1/2">
        <label className="text-xl self-center w-fit h-fit">Radio:</label>
        <input
          className="text-black"
          type="number"
          value={radius}
          onChange={onChanged}
        />
        <Button
          text="Calcular"
          className="btn-primary bg-blue-primary"
          onClick={onClickHandle}
        />
      </div>
      <h2>{result}</h2>
    </div>
  );
}
