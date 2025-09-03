export default function Testimonials(){
  const list = [
    {n:"Rahul Mehta", t:"Health Claim Settled", m:"They handled everything with the hospital TPA—super smooth."},
    {n:"Priya Sharma", t:"Car Insurance", m:"Best premium with zero-dep add-on. Quick support."},
    {n:"M. Iyer", t:"Life Policy Advice", m:"Explained clearly and suggested the right term plan."}
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900">What clients say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {list.map((x)=> (
          <div key={x.n} className="card p-6">
            <div className="font-semibold">{x.n}</div>
            <div className="text-sm text-slate-500">{x.t}</div>
            <p className="text-slate-700 mt-3">{x.m}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
