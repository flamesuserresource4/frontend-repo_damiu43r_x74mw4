import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-gray-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">Vibe Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="text-gray-600 hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#cta" className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">Get Started</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded-md hover:bg-black/5">Features</a>
            <a href="#showcase" className="block px-2 py-2 rounded-md hover:bg-black/5">Showcase</a>
            <a href="#pricing" className="block px-2 py-2 rounded-md hover:bg-black/5">Pricing</a>
            <div className="pt-2 flex gap-2">
              <a href="#" className="flex-1 text-center px-4 py-2 text-sm font-medium border rounded-md">Sign in</a>
              <a href="#cta" className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
