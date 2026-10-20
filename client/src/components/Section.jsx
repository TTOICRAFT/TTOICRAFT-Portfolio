import { motion, useReducedMotion } from 'framer-motion'

export default function Section({ id, eyebrow, title, subtitle, children }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        // Large sections (especially the stacked project cards on phones) may
        // never occupy 20% of the viewport, so use a lower reveal threshold.
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: 'easeOut' }}
      >
        <div className="mb-10">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-2 pb-[0.08em] text-3xl leading-[1.2] md:text-5xl font-display font-extrabold gradient-text">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-3 max-w-2xl leading-7 text-slate-400">{subtitle}</p>}
        </div>
        {children}
      </motion.div>
    </section>
  )
}
