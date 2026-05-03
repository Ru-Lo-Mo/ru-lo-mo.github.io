// app/project/page.tsx
export default function ProjectPage() {
  return (
    <main className="bg-zinc-950 text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold leading-tight">
            Project Title
          </h1>
          <p className="mt-6 text-zinc-400 text-lg">
            One-line explanation of what this project does and why it exists.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <Section title="Overview">
        <p>
          Explain the project clearly. What problem does it solve?
          Who is it for?
        </p>
      </Section>

      {/* PROBLEM */}
      <Section title="Problem">
        <p>
          Describe the problem space and constraints.
        </p>
      </Section>

      {/* SOLUTION */}
      <Section title="Solution">
        <p>
          Explain your approach, architecture, and design decisions.
        </p>
      </Section>

      {/* IMAGE BLOCK */}
      <ImageBlock src="/images/demo1.png" />

      {/* TECHNICAL DETAILS */}
      <Section title="Technical Breakdown">
        <ul className="list-disc ml-6 space-y-2 text-zinc-300">
          <li>Architecture choice and why</li>
          <li>Key algorithms or logic</li>
          <li>Tradeoffs you made</li>
        </ul>
      </Section>

      {/* RESULTS */}
      <Section title="Results">
        <p>
          Impact, performance improvements, or what you learned.
        </p>
      </Section>

      {/* FOOTER */}
      <section className="px-6 py-20 text-center text-zinc-500">
        Built by you • 2026
      </section>

    </main>
  );
}