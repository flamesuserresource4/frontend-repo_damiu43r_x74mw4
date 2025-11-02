import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(600px_circle_at_90%_30%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700">
              <Star size={14} className="text-amber-500" />
              Introducing a sleek developer playground
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
              Build delightful apps, visually and fast
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Design, iterate, and launch in a beautiful, minimal environment. Powered by React, Tailwind, and modern tooling.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800">
                Start building
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="px-5 py-3 rounded-md border border-black/10 bg-white/70 backdrop-blur font-medium text-gray-900 hover:bg-black/5">
                Explore features
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 1}`}
                    alt="avatar"
                    className="h-8 w-8 rounded-full ring-2 ring-white"
                  />
                ))}
              </div>
              <span>Trusted by makers worldwide</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video w-full rounded-xl border border-black/10 bg-white p-2 shadow-sm">
              <div className="h-full w-full rounded-[10px] bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-300" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="rounded-xl border border-black/10 bg-white p-3 shadow-sm">
                <div className="text-xs text-gray-500">Lightning fast</div>
                <div className="mt-1 font-medium">Vite + React + Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
