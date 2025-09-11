export default function Testimonials(){
  const list = [
    {n:"Rahul Mehta", t:"Health Claim Settled", m:"They handled everything with the hospital TPA—super smooth."},
    {n:"Priya Sharma", t:"Car Insurance", m:"Best premium with zero-dep add-on. Quick support."},
    {n:"M. Iyer", t:"Life Policy Advice", m:"Explained clearly and suggested the right term plan."}
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">What clients say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {list.map((x)=> (
          <div key={x.n} className="rounded-xl p-6 shadow bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
            <div className="font-semibold text-slate-900 dark:text-slate-100">{x.n}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{x.t}</div>
            <p className="mt-2">{x.m}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
