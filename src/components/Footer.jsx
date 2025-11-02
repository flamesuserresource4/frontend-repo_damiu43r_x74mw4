export default function Footer() {
  return (
    <footer id="cta" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-indigo-600 to-violet-600 p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to build something great?</h3>
              <p className="mt-3 text-white/80 max-w-prose">Start with a clean foundation and ship faster. No clutter, just the essentials you need to create.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a href="#" className="inline-flex justify-center rounded-md bg-white px-5 py-3 font-medium text-gray-900 hover:bg-white/90">Get started free</a>
              <a href="#features" className="inline-flex justify-center rounded-md border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10">See features</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vibe Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
