export default function TesteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-slate-500">Teste - Lay</h1>
      <main>{children}</main>
    </div>
  );
}
