export default function FAQs(){
  const faqs = [
    {q:"Do you work with all insurance companies?", a:"Yes. We compare plans from all major insurers available in the Indian market and recommend what fits your needs."},
    {q:"Is your advice unbiased?", a:"Absolutely. We are policy-first. We explain pros/cons transparently and help you pick based on needs and budget."},
    {q:"How do you support claims?", a:"We assist from documentation to submission, coordination with TPA/surveyor, and follow-up until settlement."},
    {q:"Do you charge for claim assistance?", a:"For most policies purchased through us, claim support is included. Otherwise, a service fee may apply—shared upfront."},
    {q:"Is my data secure?", a:"We use secure forms and never share your data with third parties without consent."},
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-slate-900">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 bg-white rounded-2xl border border-slate-100">
          {faqs.map((f, i)=> (
            <details key={i} className="p-6">
              <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
              <p className="text-slate-600 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
