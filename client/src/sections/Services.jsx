import { BarChart3, Database, Search, Sparkles } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'

const capabilities = [
  { icon: Search, number: '01', title: 'Ask the right question', text: 'Frame a clear problem and identify the information that can help answer it.' },
  { icon: Database, number: '02', title: 'Prepare and explore', text: 'Inspect, clean, and explore data to understand its shape, quality, and patterns.' },
  { icon: BarChart3, number: '03', title: 'Make insight visible', text: 'Use focused analysis and visualizations to explain what the data is saying.' },
  { icon: Sparkles, number: '04', title: 'Share what matters', text: 'Communicate findings in plain language with the context needed to use them.' },
]

export default function Services() {
  return <Section id="services" eyebrow="How I work" title="From question to clarity" subtitle="My analytical process keeps the business question in view at every step.">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {capabilities.map(({ icon: Icon, number, title, text }) => <Card key={number} className="h-full !border-white/[.07] !bg-white/[.025]">
        <div className="flex items-center justify-between"><span className="text-xs tracking-widest text-slate-600">{number}</span><Icon size={18} className="text-emerald-200" /></div>
        <h3 className="mt-7 text-lg font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-[15px] leading-7 text-slate-400">{text}</p>
      </Card>)}
    </div>
    <div className="mt-5 rounded-2xl border border-white/[.07] bg-white/[.02] p-5 sm:p-6">
      <p className="text-xs uppercase tracking-[.18em] text-slate-500">Analytical toolkit</p>
      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        {[
          ['Data analysis', 'Data cleaning', 'Exploratory data analysis', 'Data visualization'],
          ['Tools & languages', 'SQL', 'Python'],
          ['Visualization', 'Power BI', 'Tableau'],
          ['Relational databases', 'PostgreSQL', 'Microsoft SQL Server', 'MySQL', 'Oracle'],
          ['Cloud data platforms', 'Microsoft Azure', 'Google BigQuery', 'Snowflake'],
        ].map(([group, ...tools]) => <div key={group}>
          <p className="mb-2 text-sm font-medium text-slate-300">{group}</p>
          <div className="flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="rounded-lg border border-emerald-200/15 bg-emerald-200/[.06] px-3 py-1.5 text-xs text-emerald-100">{tool}</span>)}</div>
        </div>)}
      </div>
    </div>
  </Section>
}
