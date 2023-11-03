import bg from "../../../public/back.jpg";
import Image from "next/image";

export default function TesteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-full max-h-min overflow-y-hidden bg-simple">
      <main className="row-start-1 col-start-1 container mx-auto my-5 px-4 py-4 bg-gradient-to-tr from-blue-primary to-blue-sec rounded">
        {children}
      </main>
    </div>
  );
}
