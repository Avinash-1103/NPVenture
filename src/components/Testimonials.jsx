export default function Testimonials() {
  const list = [
    { n: "Rahul Mehta", t: "Health Claim Settled", m: "They handled everything with the hospital TPA—super smooth." },
    { n: "Priya Sharma", t: "Car Insurance", m: "Best premium with zero-dep add-on. Quick support." },
    { n: "M. Iyer", t: "Life Policy Advice", m: "Explained clearly and suggested the right term plan." }
  ];

  return (
    <section className="section transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Clients Say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {list.map((x) => (
            <div key={x.n} className="rounded-xl p-6 shadow hover:shadow-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition">
              <div className="font-semibold text-gray-900 dark:text-white">{x.n}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{x.t}</div>
              <p className="mt-2">{x.m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
