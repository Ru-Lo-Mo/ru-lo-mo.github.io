// components/Section.tsx
export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        
        <h2 className="text-3xl font-semibold mb-6">
          {title}
        </h2>

        <div className="text-zinc-300 leading-relaxed text-lg">
          {children}
        </div>

      </div>
    </section>
  );
}