// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-5xl font-bold tracking-tight">
          Your Name
        </h1>

        <p className="mt-4 text-zinc-400 text-lg">
          Developer / Designer / whatever you are building
        </p>

        <div className="mt-12 space-y-4">
          <Link
            href="/project"
            className="block p-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            <div className="text-xl font-semibold">Project Name</div>
            <div className="text-zinc-400 text-sm">
              Short description of your project
            </div>
          </Link>
        </div>

      </div>
    </main>
  );
}