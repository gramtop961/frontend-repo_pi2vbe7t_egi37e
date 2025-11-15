import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.10),transparent_60%),radial-gradient(40%_30%_at_80%_20%,rgba(6,182,212,0.12),transparent_60%),radial-gradient(40%_40%_at_20%_20%,rgba(99,102,241,0.12),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="relative border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
