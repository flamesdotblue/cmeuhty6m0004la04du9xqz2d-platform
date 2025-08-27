import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Flame } from 'lucide-react';

const drops = [
  {
    id: 1,
    name: 'VORTEX X‑1 • Crimson',
    date: 'Oct 12',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-fuchsia-500/20 to-rose-500/20',
  },
  {
    id: 2,
    name: 'VORTEX X‑1 • Glacier',
    date: 'Oct 19',
    img: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba9?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-cyan-500/20 to-indigo-500/20',
  },
  {
    id: 3,
    name: 'VORTEX X‑1 • Noir',
    date: 'Oct 26',
    img: 'https://images.unsplash.com/photo-1528701800489-20be3c2ea5a1?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-slate-500/20 to-slate-700/20',
  },
  {
    id: 4,
    name: 'VORTEX X‑1 • Neon',
    date: 'Nov 02',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-lime-500/20 to-emerald-500/20',
  },
];

export default function DropsCarousel() {
  const scroller = useRef(null);

  const scroll = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="drops" className="relative mt-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Upcoming Drops</h2>
            <p className="text-slate-400 text-sm">Drag to explore or use the arrows</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll('right')} className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <motion.div className="relative">
          <motion.div
            ref={scroller}
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            dragElastic={0.06}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-4"
          >
            {drops.map((d) => (
              <motion.article
                key={d.id}
                whileHover={{ y: -6 }}
                className="relative min-w-[280px] max-w-sm flex-1 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl shadow-black/40"
              >
                <div className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${d.accent} blur-xl`} />
                <div className="p-4">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img src={d.img} alt={d.name} className="h-56 w-full object-cover" loading="lazy" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-2 py-1 text-[10px] text-white backdrop-blur">
                      <Flame className="h-3 w-3 text-rose-300" />
                      {d.date}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="font-semibold">{d.name}</h3>
                    <button className="rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100 hover:bg-cyan-500/20">Notify</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
