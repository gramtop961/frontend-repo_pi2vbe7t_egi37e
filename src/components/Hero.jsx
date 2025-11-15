import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-slate-700 border border-white/60 shadow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            Available for freelance work
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Crafting playful, modern web experiences that feel alive.
          </h1>
          <p className="mt-5 text-slate-700 text-lg">
            I’m a full‑stack developer focused on delightful interactions, solid engineering, and business impact.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold border border-white/60 shadow hover:bg-white/90 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
