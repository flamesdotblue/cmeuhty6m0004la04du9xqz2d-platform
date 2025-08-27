import { useState } from 'react';
import { Mail, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const submit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus('error');
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section id="signup" className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-cyan-500/10 to-indigo-500/20 blur-2xl" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Be first in line</h3>
              <p className="mt-2 max-w-xl text-slate-300">Join the list for early access, exclusive colorways, and members-only raffles. No spam, just heat.</p>
              <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@sneakerhead.xyz"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-9 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-300/40"
                    aria-label="Email address"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-100 hover:bg-emerald-500/20 disabled:opacity-60"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Submitting…' : 'Notify me'}
                </button>
              </form>
              {status === 'error' && (
                <p className="mt-2 text-sm text-rose-300">Please enter a valid email.</p>
              )}
              {status === 'success' && (
                <p className="mt-2 text-sm text-emerald-300">You\'re on the list! Watch your inbox.</p>
              )}
            </div>
            <div className="lg:justify-self-end">
              <p className="text-sm text-slate-400">Follow the drip</p>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Twitter" className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 hover:bg-white/10"><Twitter className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 hover:bg-white/10"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
