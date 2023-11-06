import { CircleArea, PI } from "@/lib/math";

export async function GET(request: Request) {
  return Response.json(PI);
}

export type CircleAreaPOSTResult = { result: number };
export async function POST(request: Request) {
  const { radius }: { radius: number } = await request.json();
  const result = CircleArea(radius);
  return Response.json({ result });
}
