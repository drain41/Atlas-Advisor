 import Link from "next/link";
import { faqs } from "@/lib/faq";

export default function FaqIndex() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <ul className="mt-6 grid gap-4">
        {faqs.map(f => (
          <li key={f.slug} className="rounded-2xl border border-white/10 p-5">
            <h2 className="font-medium">{f.question}</h2>
            <p className="mt-1 text-slate-400">{f.answerShort}</p>
            <Link href={`/faq/${f.slug}`} className="mt-3 inline-block rounded-lg bg-cyan-400 px-3 py-1 text-sm font-medium text-slate-900">
              Open
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
