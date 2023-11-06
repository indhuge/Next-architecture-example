import { CircleAreaPOSTResult } from "@/app/api/circle-area/route";

export async function RequestAreaValue(radius: number): Promise<number> {
  const req = await fetch("/api/circle-area", {
    method: "POST",
    body: JSON.stringify({
      radius: radius,
    }),
  });
  const res: CircleAreaPOSTResult = await req.json();
  return res.result;
}
