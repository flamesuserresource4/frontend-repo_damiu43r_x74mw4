import { Shield, Zap, Sparkles, Settings } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant feedback',
    desc: 'Edit and see changes live with a blazing-fast dev server.',
  },
  {
    icon: Shield,
    title: 'Type-safe by design',
    desc: 'Built to scale with modern tooling and best practices.',
  },
  {
    icon: Settings,
    title: 'Composable UI',
    desc: 'Craft clean interfaces with small, reusable components.',
  },
  {
    icon: Sparkles,
    title: 'Polished by default',
    desc: 'Beautiful defaults, animations, and icons out of the box.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need</h2>
          <p className="mt-3 text-gray-600">
            A thoughtfully curated starter that helps you move from idea to product with ease.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <button className="mt-4 text-sm font-medium text-gray-900 hover:underline">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
