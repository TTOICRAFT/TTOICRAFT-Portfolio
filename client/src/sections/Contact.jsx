import { useState } from 'react'
import { ArrowUpRight, Mail, MessageCircle, Send } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import config from '../config'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '', status: 'idle' })

  const submit = async (event) => {
    event.preventDefault()
    setState((current) => ({ ...current, status: 'loading' }))
    try {
      const response = await fetch(config.getApiUrl('api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: state.name, email: state.email, message: state.message }),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || result?.ok !== true) throw new Error('Message could not be sent')
      setState({ name: '', email: '', message: '', status: 'success' })
    } catch {
      setState((current) => ({ ...current, status: 'error' }))
    }
  }

  return <Section id="contact" eyebrow="Get in touch" title="Let’s talk about data" subtitle="Have a project, a question, or an opportunity to collaborate? I’d be glad to hear from you.">
    <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
      <Card className="flex flex-col justify-between !bg-[#0b1717]/80">
        <div><span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-200/15 bg-emerald-200/[.06] text-emerald-200"><Mail size={19} /></span><h3 className="mt-5 text-xl font-semibold text-slate-100">Send me a note</h3><p className="mt-2 text-sm leading-6 text-slate-400">The best conversations start with a good question. Tell me what you’re working on.</p></div>
        <div className="mt-8 flex flex-col items-start gap-4">
          <a className="inline-flex items-center gap-2 text-sm text-emerald-200 hover:text-emerald-100" href="mailto:owolabioluwatimilehinisrael01@gmail.com">owolabioluwatimilehinisrael01@gmail.com <ArrowUpRight size={15} /></a>
          <a className="inline-flex items-center gap-2 text-sm text-emerald-200 hover:text-emerald-100" href="https://wa.link/a8jjqu" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Message me on WhatsApp <ArrowUpRight size={15} /></a>
        </div>
      </Card>
      <Card className="!bg-white/[.025]">
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-slate-400">Your name<input required value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 p-3 text-slate-100 outline-none transition focus:border-emerald-200/40" /></label>
          <label className="text-sm text-slate-400">Email address<input required type="email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 p-3 text-slate-100 outline-none transition focus:border-emerald-200/40" /></label>
          <label className="text-sm text-slate-400 sm:col-span-2">Message<textarea required rows="5" value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/50 p-3 text-slate-100 outline-none transition focus:border-emerald-200/40" /></label>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button disabled={state.status === 'loading'} className="inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-5 py-2.5 font-semibold text-[#071311] transition hover:bg-emerald-200 disabled:opacity-60">{state.status === 'loading' ? 'Sending…' : 'Send message'} <Send size={15} /></button>
            {state.status === 'success' && <span role="status" className="text-sm text-emerald-200">Thanks, your message is on its way.</span>}
            {state.status === 'error' && <span role="alert" className="text-sm text-rose-300">Message didn’t send. Please try again or email me directly.</span>}
          </div>
        </form>
      </Card>
    </div>
  </Section>
}
