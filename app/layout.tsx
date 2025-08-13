export const metadata = { title: "Atlas Advisor", description: "AI-powered investing" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-cyan-400/90" />
              <a href="/" className="font-semibold">Atlas Advisor</a>
            </div>
            <nav className="hidden gap-6 md:flex text-sm text-slate-300">
              <a href="/#how">How it Works</a>
              <a href="/#features">Features</a>
              <a href="/#pricing">Pricing</a>
              <a href="/faq">FAQ</a>
            </nav>
            <div className="flex gap-2">
              <a href="/waitlist" className="rounded-xl border border-cyan-300/40 px-3 py-2 text-sm">Join Waitlist</a>
              <a href="/app" className="rounded-xl bg-cyan-400 px-3 py-2 text-sm font-medium text-slate-900">Launch App</a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        <footer className="mt-20 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400">
            <div className="flex flex-wrap gap-6">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/disclosures">Disclosures</a>
              <span>Security</span>
            </div>
            <p className="mt-6">
              © {new Date().getFullYear()} Atlas Advisor. Investment advisory services may be provided by Atlas Advisor LLC, a registered investment advisor.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
