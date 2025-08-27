import { Zap, Flame } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute -inset-2 rounded-full bg-fuchsia-500/30 blur-lg" />
                <Zap className="relative h-6 w-6 text-fuchsia-400" />
              </div>
              <span className="font-semibold tracking-wide">SneakDrop</span>
            </a>

            <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <li><a href="#drops" className="hover:text-white transition">Drops</a></li>
              <li><a href="#story" className="hover:text-white transition">Story</a></li>
              <li><a href="#signup" className="hover:text-white transition">Notify</a></li>
            </ul>

            <a href="#signup" className="group inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-200 backdrop-blur hover:bg-fuchsia-500/20 transition">
              <Flame className="h-4 w-4 text-fuchsia-300 group-hover:rotate-12 transition" />
              Get Notified
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
