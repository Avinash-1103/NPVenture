import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Services from "./Services.jsx";
import Partners from "./Partners.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home(){
  return (
    <div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
          >
            <span className="badge mb-4">All Companies • All Policies • All Claims</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              One‑stop solution for all your <span className="text-brand-700">insurance</span> needs
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Compare plans across India’s top insurers, get unbiased advice, and full support for claims—end‑to‑end.
            </p>
            <div className="mt-6 flex gap-3">
              <NavLink to="/services" className="btn btn-primary">Explore Insurance</NavLink>
              <NavLink to="/contact" className="btn btn-ghost">Contact Agent</NavLink>
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <li className="card p-4">Life</li>
              <li className="card p-4">Health</li>
              <li className="card p-4">Vehicle</li>
              <li className="card p-4">Travel</li>
              <li className="card p-4">Property</li>
              <li className="card p-4">Business</li>
            </ul>
          </motion.div>
          <motion.div
            className="relative"
            initial={{opacity:0, scale:0.95}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            transition={{duration:0.6, delay:0.1}}
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-100 to-blue-100 border border-sky-200 p-4">
              <div className="w-full h-full rounded-2xl bg-white grid place-items-center text-center p-10">
                <div>
                  <div className="text-6xl mb-3">🛡️</div>
                  <p className="text-xl font-semibold text-slate-800">Trusted coverage, transparent advice.</p>
                  <p className="text-slate-600 mt-2">Pan‑India partnerships • IRDAI‑compliant • Claims hand‑holding</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Services embed />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Partners embed />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Testimonials />
        </div>
      </section>
    </div>
  )
}
