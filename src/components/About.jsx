export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-cyan-100" />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">A bit about me</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I build interactive products that blend strong visual design with robust engineering. I care about accessibility, performance, and tiny details that make interfaces feel human.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              When I’m not coding, you’ll find me exploring generative art, tinkering with 3D, and contributing to open‑source.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
                <p className="font-semibold">5+ years</p>
                <p className="text-slate-600">in product engineering</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
                <p className="font-semibold">UI motion</p>
                <p className="text-slate-600">as a first‑class citizen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
