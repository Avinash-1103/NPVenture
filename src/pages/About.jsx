import { motion } from "framer-motion";

export default function About(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
          <p className="text-slate-600">We are a team of IRDAI-licensed advisors helping individuals and businesses choose the right policies and get hassle-free claim support. We partner with all major insurers in India to bring unbiased comparisons and guidance.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card p-4"><div className="text-2xl font-bold text-brand-700">5+</div><div className="text-slate-600 text-sm">Years Experience</div></div>
            <div className="card p-4"><div className="text-2xl font-bold text-brand-700">20+</div><div className="text-slate-600 text-sm">Insurer Partners</div></div>
            <div className="card p-4"><div className="text-2xl font-bold text-brand-700">5k+</div><div className="text-slate-600 text-sm">Claims Assisted</div></div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="card p-6 space-y-3">
          <h3 className="text-xl font-semibold">Mission</h3>
          <p className="text-slate-600">To simplify insurance for everyone with honest advice, transparent comparisons, and dependable claim support.</p>
          <h3 className="text-xl font-semibold">Vision</h3>
          <p className="text-slate-600">To be India’s most trusted insurance service platform.</p>
          <h3 className="text-xl font-semibold">Why Choose Us</h3>
          <ul className="list-disc pl-5 text-slate-600">
            <li>All insurers on one platform</li>
            <li>Tailored recommendations for your needs</li>
            <li>End-to-end claims assistance</li>
            <li>No hidden costs, no jargon</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
