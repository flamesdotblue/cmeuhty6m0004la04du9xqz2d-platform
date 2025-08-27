import { motion } from 'framer-motion';
import { ArrowRight, Shield, Calendar, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Limited Launch • Glassmorphic Edition
            </div>
            <h1 id="hero-title" className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              VORTEX X‑1
              <span className="block bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Where speed meets street</span>
            </h1>
            <p className="max-w-xl text-slate-300">
              Engineered for impact. Designed for expression. The VORTEX X‑1 fuses aerospace foam with street‑ready grip so you move faster, lighter, louder.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#drops" className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-100 hover:bg-cyan-500/20 transition">
                Explore Drops
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#signup" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 hover:bg-white/10 transition">
                <Calendar className="h-4 w-4 text-slate-300" />
                Get launch alert
              </a>
            </div>
            <dl id="story" className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <dt className="text-xs text-slate-400">Aerospace Foam</dt>
                <dd className="text-lg font-semibold">FeatherRide</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <dt className="text-xs text-slate-400">Traction</dt>
                <dd className="text-lg font-semibold">NeoGrip 2.0</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <dt className="text-xs text-slate-400">Warranty</dt>
                <dd className="flex items-center gap-1 text-lg font-semibold"><Shield className="h-4 w-4 text-emerald-300" /> 12 mo</dd>
              </div>
            </dl>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/20 via-cyan-500/10 to-indigo-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-2xl shadow-black/40">
              <div className="absolute right-4 top-4 text-xs text-slate-300/80">Prototype • X‑series</div>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80"
                alt="VORTEX X-1 sneaker in crimson"
                className="mx-auto aspect-[4/3] w-full max-w-xl object-cover object-center rounded-2xl"
                loading="eager"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Crimson Rush", "Glacier White", "Noir Fade"].map((c) => (
                  <div key={c} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-slate-300">{c}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
