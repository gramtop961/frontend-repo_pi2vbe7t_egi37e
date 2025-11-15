const skills = [
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Radix'] },
  { group: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'Postgres', 'Redis'] },
  { group: 'Infra', items: ['Docker', 'Vercel', 'AWS', 'GitHub Actions'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Skills & Tools</h2>
        <p className="mt-2 text-slate-600">What I use to ship fast and scale.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-sm rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-700">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
