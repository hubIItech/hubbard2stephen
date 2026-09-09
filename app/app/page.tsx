import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
          True stories yield real solutions
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6">
          Everyone has a story, will you tell Yours?
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          StorieZ matches your lived experience to people who made it through the same thing. 
          Mask your input, mute your outcome, and earn reputation for every real step forward.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/sign-in" 
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 font-medium rounded-lg transition"
          >
            Tell Your Story
          </Link>
          <Link 
            href="/community-stories" 
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 font-medium rounded-lg border border-slate-700 transition"
          >
            Explore Community Stories
          </Link>
        </div>
      </section>

      {/* Trajectory Framework */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-center">A four-step trajectory framework</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-emerald-400 font-mono font-bold text-sm">01</span>
            <h3 className="text-lg font-semibold mt-2 mb-1">Mask Your Input</h3>
            <p className="text-sm text-slate-400">Share the raw situation privately. Identifying details are masked before anyone sees a word.</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-emerald-400 font-mono font-bold text-sm">02</span>
            <h3 className="text-lg font-semibold mt-2 mb-1">Match Lived Experience</h3>
            <p className="text-sm text-slate-400">Our engine surfaces people who walked the same road and made it out the other side.</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-emerald-400 font-mono font-bold text-sm">03</span>
            <h3 className="text-lg font-semibold mt-2 mb-1">Follow The Trajectory</h3>
            <p className="text-sm text-slate-400">Trace their timeline of decisions, mementos, and milestones — the real path, not advice.</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-emerald-400 font-mono font-bold text-sm">04</span>
            <h3 className="text-lg font-semibold mt-2 mb-1">Mute Your Outcome</h3>
            <p className="text-sm text-slate-400">Take action, log recovery, and earn 3eco reputation while keeping your outcome yours.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
