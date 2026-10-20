import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import projects from '../data/projects'

function ProjectCard({ project, index, featured = false }) {
  return <Card className={`group flex h-full flex-col overflow-hidden !border-white/[.08] !bg-[#0b1717]/75 !p-0 transition duration-300 hover:!border-emerald-200/20 ${featured ? 'lg:col-span-2' : ''}`}>
    <div className={`relative overflow-hidden border-b border-white/[.07] bg-[radial-gradient(ellipse_at_50%_45%,rgba(16,185,129,.10),transparent_58%),linear-gradient(125deg,#0d201d,#071311)] ${featured ? 'h-64 sm:h-[22rem]' : 'h-44 sm:h-48'}`}>
      {project.preview ? <img src={project.preview} alt={project.previewAlt} className="h-full w-full object-cover object-center" loading="lazy" /> : <div className="grid h-full place-items-center bg-[radial-gradient(ellipse_at_80%_20%,rgba(110,231,183,.12),transparent_45%),linear-gradient(125deg,#0d201d,#0b1717)]"><span className="font-mono text-3xl font-semibold tracking-widest text-emerald-100/80">{project.mark}</span></div>}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[.12em] text-slate-700 shadow-sm">
        <span className="text-slate-400">{String(index + 1).padStart(2, '0')}</span><span>{project.category}</span>
      </div>
    </div>

    <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-8' : 'p-6'}`}>
      <h3 className={`font-display font-semibold leading-snug text-slate-100 ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-400">{project.summary}</p>
      <div className="mt-5 rounded-xl border-l-2 border-emerald-200/50 bg-white/[.025] px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-emerald-200">Key finding</p>
        <p className="mt-1.5 text-[15px] leading-7 text-slate-300">{project.finding}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-lg border border-white/[.08] bg-white/[.025] px-2.5 py-1 text-xs text-slate-300">{tag}</span>)}</div>
      <div className="mt-6 flex flex-wrap gap-4">
        {project.dashboardUrl && <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition hover:text-emerald-100">Open dashboard <ArrowUpRight size={16} /></a>}
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"><Github size={15} /> Repository</a>
      </div>
    </div>
  </Card>
}

export default function Work() {
  const reduceMotion = useReducedMotion()

  return <Section id="work" eyebrow="Selected work · 6 projects" title="Questions worth exploring" subtitle="A mix of dashboarding, SQL analysis, data preparation, and exploratory work across business domains.">
    <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
      {projects.map((project, index) => <motion.div
        key={project.id}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: reduceMotion ? 0 : .45, delay: reduceMotion ? 0 : Math.min(index * .06, .3), ease: 'easeOut' }}
        whileHover={reduceMotion ? undefined : { y: -4 }}
        className={index === 0 ? 'h-full lg:col-span-2' : 'h-full'}
      ><ProjectCard project={project} index={index} featured={index === 0} /></motion.div>)}
    </div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[.07] bg-white/[.02] px-5 py-4">
      <p className="text-sm text-slate-400">Want to see the notebooks, queries, and source files?</p>
      <a href="https://github.com/TTOICRAFT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 hover:text-emerald-100">Browse all repositories <ExternalLink size={14} /></a>
    </div>
  </Section>
}
