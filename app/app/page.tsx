import Link from "next/link";
import { faqs } from "@/lib/faq";

export default function HomePage() {
  return (
    <div>
      <section className="mb-14">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Smarter investing, guided by AI you can trust.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Atlas Advisor helps you plan, invest, and rebalance with transparent recommendations and clear risk.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/app" className="rounded-xl bg-cyan-400 px-4 py-2 font-medium text-slate-900">
            Launch App
          </Link>
          <Link href="/#features" className="rounded-xl border border-white/10 px-4 py-2">
            See Features
          </Link>
        </div>
      </section>

      <section id="how" className="mb-16">
        <h2 className="text-xl font-semibold">How it Works</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Connect your accounts, set goals, and let Atlas construct and monitor a portfolio that matches your risk.
        </p>
      </section>

      <section id="features" className="mb-16">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          <li className="rounded-2xl border border-white/10 p-5">Goal-based planning</li>
          <li className="rounded-2xl border border-white/10 p-5">Tax-aware rebalancing</li>
          <li className="rounded-2xl border border-white/10 p-5">Scenario analysis</li>
          <li className="rounded-2xl border border-white/10 p-5">Brokerage integrations</li>
        </ul>
      </section>

      <section id="pricing" className="mb-16">
        <h2 className="text-xl font-semibold">Pricing</h2>
        <div className="mt-4 rounded-2xl border border-white/10 p-5">
          <p className="text-3xl font-semibold">$12<span className="text-base font-normal">/mo</span></p>
          <p className="mt-2 text-slate-300">Simple, transparent pricing. Cancel anytime.</p>
        </div>
      </section>

      <section id="faq" className="mb-24">
        <h2 className="text-xl font-semibold">FAQ</h2>

        <div className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10">
          {faqs.map((f) => (
            <Link
              key={f.slug}
              href={`/faq/${f.slug}`}
              className="block p-5 hover:bg-white/5 focus:bg-white/5 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{f.question}</span>
                <span className="text-sm text-slate-400">Read more →</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{f.answerShort}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
