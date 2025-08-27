import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DropsCarousel from './components/DropsCarousel';
import Signup from './components/Signup';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Ambient gradient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <DropsCarousel />
        <Signup />
      </main>

      <footer className="relative mt-20 border-t border-white/10 bg-white/5/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} SneakDrop. All rights reserved.</p>
          <p className="text-sm text-slate-400">Crafted for sneakerheads. Stay laced.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
