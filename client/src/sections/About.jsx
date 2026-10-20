import { ArrowUpRight, Compass, Lightbulb, MessageCircle } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'

const principles = [
  { icon: Compass, title: 'Start with context', text: 'A useful analysis begins with the people, goals, and decisions behind the data.' },
  { icon: Lightbulb, title: 'Stay curious', text: 'Look beyond the first result, check assumptions, and follow the evidence.' },
  { icon: MessageCircle, title: 'Make it understandable', text: 'The clearest insight is one people can explain and put to work.' },
]

export default function About() {
  return <Section id="about" eyebrow="A little about me" title="Curious by nature. Clear by design." subtitle="I’m Owolabi Israel, a Data Analyst with a degree in Mechanical Engineering.">
    <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
      <Card className="!bg-white/[.025]">
        <p className="text-lg leading-8 text-slate-300">I specialize in transforming raw data into meaningful insights that support informed decision-making, improve business performance, and uncover opportunities for growth. I enjoy working with complex datasets, identifying patterns, and solving business problems through careful analysis.</p>
        <p className="mt-5 leading-7 text-slate-400">My work emphasizes data accuracy, efficient queries, and well-structured workflows. I translate analytical findings into clear, actionable insights and compelling visualizations that make complex information easier to understand.</p>
        <p className="mt-5 font-medium leading-7 text-emerald-100">Turn data into insights, insights into decisions, and decisions into measurable impact.</p>
        <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-200 hover:text-emerald-100">Start a conversation <ArrowUpRight size={16} /></a>
      </Card>
      <div className="grid gap-3">
        {principles.map(({ icon: Icon, title, text }) => <Card key={title} className="!bg-white/[.025] !p-5">
          <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-200/15 bg-emerald-200/[.06] text-emerald-200"><Icon size={18} /></span><div><h3 className="font-semibold text-slate-100">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{text}</p></div></div>
        </Card>)}
      </div>
    </div>
  </Section>
}
