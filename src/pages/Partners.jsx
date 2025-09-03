import { motion } from "framer-motion";

const PARTNERS = [
  "LIC", "HDFC Life", "ICICI Prudential", "SBI Life", "Max Life",
  "Bajaj Allianz", "Tata AIG", "Star Health", "New India Assurance", "Oriental Insurance"
];

export default function Partners({ embed=false }){
  const content = (
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Insurance Partners</h2>
      <p className="text-slate-600 mt-2">We work with India’s leading insurers to bring you the best choices.</p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {PARTNERS.map((p, i)=> (
          <motion.div key={p} className="card p-6 text-center text-slate-700 font-medium"
            initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.03}}>
            <div className="h-12 grid place-items-center">
              <span>{p}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
  if (embed) return content;
  return (
    <section className="section">
      <div className="container">{content}</div>
    </section>
  )
}
