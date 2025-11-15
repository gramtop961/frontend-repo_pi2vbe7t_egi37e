import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    desc: 'Docs, whiteboards, and video — all synchronized with CRDT magic.',
    tags: ['React', 'WebRTC', 'CRDT'],
    link: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Growth Toolkit',
    desc: 'A modular storefront with analytics and AI‑powered recommendations.',
    tags: ['Next.js', 'Stripe', 'Postgres'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Design System Playground',
    desc: 'Token‑driven components with motion and accessibility baked in.',
    tags: ['Storybook', 'Radix', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Featured Work</h2>
            <p className="mt-2 text-slate-600">A few things I loved building recently.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900">See all projects →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-cyan-100 mb-4" />
              <h3 className="text-lg font-bold group-hover:text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
