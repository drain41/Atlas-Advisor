export type Faq = {
  slug: string;
  question: string;
  answerShort: string;
  answerLong: string;
};

export const faqs: Faq[] = [
  {
    slug: "data-protection",
    question: "How does Atlas Advisor protect my financial data?",
    answerShort: "Bank-level encryption, SOC2-aligned controls, and no selling of data.",
    answerLong:
      "We use TLS 1.3 in transit and AES-256 at rest. Access is strictly role-based with hardware-backed keys. We follow SOC 2 Type II controls and complete annual penetration tests. Atlas never sells personal data. You can delete your account and associated data at any time from Settings."
  },
  {
    slug: "registered-advisor",
    question: "Is Atlas Advisor a registered investment advisor?",
    answerShort: "Yes. Advice is delivered by Atlas Advisor LLC, an RIA.",
    answerLong:
      "Atlas Advisor LLC is a registered investment advisor (RIA). Our disclosures include Form ADV Parts 2A/2B, available on the Disclosures page. Registration does not imply a certain level of skill, but it allows us to provide fiduciary advice under applicable regulations."
  },
  {
    slug: "cancel-anytime",
    question: "Can I cancel my subscription at any time?",
    answerShort: "Absolutely—no lock-in and prorated refunds where required.",
    answerLong:
      "You can cancel from Billing at any point. Your plan remains active until the end of the current cycle. Where required by law, we provide prorated refunds. Your portfolios remain accessible in read-only mode after cancellation."
  },
  {
    slug: "ai-accuracy",
    question: "How accurate are the AI recommendations?",
    answerShort: "Backtested, human-reviewed, and risk-scored—but not guarantees.",
    answerLong:
      "Recommendations combine factor models and your risk profile. We show confidence bands and scenario analyses. Past performance does not guarantee future results; investing involves risk including loss of principal."
  },
  {
    slug: "brokerage-support",
    question: "Do you support all major brokerages?",
    answerShort: "Most US brokerages via secure aggregation.",
    answerLong:
      "We support direct connections to many US brokerages and banks. If yours isn’t listed, you can import via CSV. We’re adding international brokers soon; check the Integrations page for the current list."
  }
];

export const getFaqBySlug = (slug: string) => faqs.find(f => f.slug === slug);
