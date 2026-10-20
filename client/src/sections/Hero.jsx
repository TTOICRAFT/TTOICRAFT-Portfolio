import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, BarChart3, Database, LineChart } from 'lucide-react'
import Button from '../components/Button'
import Socials from '../components/Socials'

const steps = [
  { number: '01', label: 'Ask a clear question', Icon: Database },
  { number: '02', label: 'Find the pattern', Icon: LineChart },
]
const trendPath = 'M0 119 C40 116 52 96 91 101 S143 81 181 92 S231 56 270 68 S324 78 359 54 S419 61 447 34 S517 44 560 14'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { delay },
  })

  return <section id="home" className="scroll-mt-24 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
    <div className="max-w-2xl">
      <motion.p {...entrance()} className="text-xs uppercase tracking-[.2em] text-slate-400">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.8)]" />Data Analyst · Business-focused insights
      </motion.p>
      <motion.h1 {...entrance(.08)} className="mt-5 font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-100 md:text-7xl">
        I make data <span className="gradient-text">make sense.</span>
      </motion.h1>
      <motion.p {...entrance(.15)} className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
        I’m Owolabi Israel, a Data Analyst. I transform raw data into clear insights that support informed decisions, stronger business performance, and opportunities for growth.
      </motion.p>
      <motion.div {...entrance(.2)} className="mt-8 flex flex-wrap items-center gap-3">
        <Button href="#work">Explore my work <ArrowDownRight className="ml-1 inline h-4 w-4" /></Button>
        <a href="#contact" className="rounded-xl border border-white/10 px-5 py-2.5 text-slate-200 glass">Get in touch</a>
      </motion.div>
      <div className="mt-8"><Socials /></div>
    </div>

    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1717]/90 p-5 shadow-2xl shadow-black/30 sm:p-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div><p className="text-sm font-semibold text-slate-100">Insight overview</p><p className="mt-1 text-xs text-slate-500">A closer look at the numbers</p></div>
          <span className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-2 text-emerald-200"><BarChart3 size={18} /></span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {steps.map(({ number, label, Icon }) => <div key={number} className="rounded-2xl border border-white/[.07] bg-white/[.025] p-4">
            <div className="flex items-center justify-between text-xs text-slate-500"><span>STEP {number}</span><Icon size={16} className="text-emerald-200" /></div>
            <p className="mt-4 text-sm font-medium text-slate-200">{label}</p>
          </div>)}
        </div>
        <div className="mt-3 rounded-2xl border border-white/[.07] bg-white/[.025] p-4">
          <div className="flex items-center justify-between"><p className="text-xs text-slate-400">From raw data to decision</p><span className="text-[10px] uppercase tracking-widest text-emerald-200">Analysis</span></div>
          <svg viewBox="0 0 560 150" className="mt-4 h-32 w-full" role="img" aria-label="Illustrative data trend visualization">
            <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#6ee7b7" stopOpacity=".28" /><stop offset="1" stopColor="#6ee7b7" stopOpacity="0" /></linearGradient></defs>
            <path d={`${trendPath} V150 H0Z`} fill="url(#chartFill)" />
            <motion.path d={trendPath} initial={reduceMotion ? false : { pathLength: 0, opacity: 0.35 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 1.4, delay: reduceMotion ? 0 : .45, ease: 'easeInOut' }} fill="none" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 145H560M0 105H560M0 65H560M0 25H560" stroke="white" strokeOpacity=".07" strokeDasharray="4 7" />
          </svg>
          <div className="flex justify-between text-[10px] text-slate-600"><span>Explore</span><span>Analyze</span><span>Communicate</span></div>
        </div>
        <p className="mt-4 text-center text-[11px] text-slate-500">A thoughtful process. Clearer decisions.</p>
      </div>
    </div>
  </section>
}
