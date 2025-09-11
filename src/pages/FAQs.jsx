export default function FAQs() {
  const faqs = [
    { q: "Do you work with all insurance companies?", a: "Yes. We compare plans from all major insurers available in the Indian market and recommend what fits your needs." },
    { q: "Is your advice unbiased?", a: "Absolutely. We are policy-first. We explain pros/cons transparently and help you pick based on needs and budget." },
    { q: "How do you support claims?", a: "We assist from documentation to submission, coordination with TPA/surveyor, and follow-up until settlement." },
    { q: "Do you charge for claim assistance?", a: "For most policies purchased through us, claim support is included. Otherwise, a service fee may apply—shared upfront." },
    { q: "Is my data secure?", a: "We use secure forms and never share your data with third parties without consent." },
  ];

  return (
    <section className="section transition-colors duration-300">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">FAQs</h2>
        <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
          {faqs.map((f, i) => (
            <details key={i} className="p-6">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                {f.q}
              </summary>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
