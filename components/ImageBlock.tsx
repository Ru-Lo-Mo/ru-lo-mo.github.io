// components/ImageBlock.tsx
export default function ImageBlock({ src }: { src: string }) {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <img
          src={src}
          className="rounded-xl border border-zinc-800"
        />
      </div>
    </section>
  );
}