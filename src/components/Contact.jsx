import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Placeholder interaction; in real use, wire to a backend endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('sent')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">Let’s build something</h2>
              <p className="text-slate-600">I’m open to freelance, consulting, and collabs.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <textarea
              rows="5"
              required
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
            >
              {status === 'sending' ? (
                'Sending…'
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-green-600">Thanks! I’ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
