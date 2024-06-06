export default function Blockquote({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <blockquote className="border-l-2 border-[hsl(var(--primary))] pl-5 py-3 text-sm text-stone-300">
      {children}
    </blockquote>
  );
}
