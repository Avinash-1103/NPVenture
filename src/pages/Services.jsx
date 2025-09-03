import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { key: "life", title: "Life Insurance", desc: "Term, endowment, ULIPs and more for family protection."},
  { key: "health", title: "Health Insurance", desc: "Individual, family floater, top-up, critical illness."},
  { key: "vehicle", title: "Vehicle Insurance", desc: "Car, bike, commercial vehicle policies with add-ons."},
  { key: "travel", title: "Travel Insurance", desc: "Domestic & international trips, student travel, baggage loss."},
  { key: "property", title: "Property/Home", desc: "Home structure & contents, burglary, fire, natural calamities."},
  { key: "business", title: "Business Insurance", desc: "Shop, marine, liability, WC, cyber risk, professional indemnity."},
];

export default function Services({ embed=false }){
  const [q, setQ] = useState("");
  const [active, setActive] = useState("all");

  const filtered = useMemo(()=>{
    const base = active==="all" ? CATEGORIES : CATEGORIES.filter(c=> c.key===active);
    return base.filter(c=> (c.title + " " + c.desc).toLowerCase().includes(q.toLowerCase()));
  }, [q, active]);

  const content = (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-slate-900">Insurance Services</h2>
        <input className="input md:w-80" placeholder="Search insurance types..." value={q} onChange={(e)=> setQ(e.target.value)} />
      </div>
      <div className="mt-4 flex gap-2 flex-wrap">
        {["all", ...CATEGORIES.map(c=>c.key)].map((k)=> (
          <button key={k} onClick={()=> setActive(k)} className={`badge ${active===k? "ring-2 ring-brand-500":""}`}>{k[0].toUpperCase()+k.slice(1)}</button>
        ))}
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c, i)=> (
          <motion.div key={c.key} className="card p-6"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.05}}>
            <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
            <p className="text-slate-600 mt-2">{c.desc}</p>
            <a href="/contact" className="btn btn-primary mt-4">Get Quote</a>
          </motion.div>
        ))}
      </div>
    </div>
  );

  if (embed) {
    return content;
  }

  return (
    <section className="section">
      <div className="container">{content}</div>
    </section>
  )
}
