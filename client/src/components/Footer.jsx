export function Footer() {
  return <footer className="mt-24 border-t border-white/5">
    <div className="container flex flex-col items-center justify-between gap-4 py-10 text-sm text-slate-400 md:flex-row">
      <p>© {new Date().getFullYear()} Owolabi Israel. All rights reserved.</p>
      <p className="opacity-70">Turn data into insights, insights into decisions.</p>
    </div>
  </footer>
}
