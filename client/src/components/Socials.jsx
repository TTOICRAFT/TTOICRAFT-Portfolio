// client/src/components/Socials.jsx
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

const LINKS = {
  github: 'https://github.com/TTOICRAFT',
  linkedin: 'https://www.linkedin.com/in/owolabi-israel/',
  email: 'owolabioluwatimilehinisrael01@gmail.com',
  whatsapp: 'https://wa.link/a8jjqu',
}

export default function Socials() {
  return (
    <div className="flex items-center gap-3">
      {/* GitHub */}
      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        title="GitHub"
        className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 glass text-slate-200 hover:border-white/20 transition will-change-transform active:scale-95"
      >
        <Github className="h-5 w-5" />
      </a>

      {/* LinkedIn */}
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        title="LinkedIn"
        className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 glass text-slate-200 hover:border-white/20 transition will-change-transform active:scale-95"
      >
        <Linkedin className="h-5 w-5" />
      </a>

      {/* Email */}
      <a
        href={`mailto:${LINKS.email}`}
        aria-label="Send me an email"
        title={LINKS.email}
        className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 glass text-slate-200 hover:border-white/20 transition will-change-transform active:scale-95"
      >
        <Mail className="h-5 w-5" />
      </a>

      {/* WhatsApp */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message me on WhatsApp"
        title="WhatsApp"
        className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 glass text-slate-200 hover:border-white/20 transition will-change-transform active:scale-95"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  )
}
