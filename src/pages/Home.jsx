import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Services from "./Services.jsx";
import Partners from "./Partners.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="badge mb-4 text-gray-700 dark:text-gray-300 dark:text-slate-600">
              All Companies • All Policies • All Claims
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              One‑stop solution for all your{" "}
              <span className="text-brand-700">insurance</span> needs
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
              Compare plans across India’s top insurers, get unbiased advice,
              and full support for claims—end‑to‑end.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <NavLink to="/services" className="btn btn-primary">
                Explore Insurance
              </NavLink>
              <NavLink to="/contact" className="btn btn-ghost">
                Contact Agent
              </NavLink>
            </div>

            {/* Categories */}
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {["Life", "Health", "Vehicle", "Travel", "Property", "Business"].map((cat) => (
                <li
                  key={cat}
                  className="card p-4 bg-white text-slate-800 dark:bg-gray-800 dark:text-slate-200 rounded-xl shadow hover:shadow-lg transition"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 border border-sky-200 dark:border-gray-600 p-4">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 grid place-items-center text-center p-10">
                <div>
                  <div className="text-6xl mb-3">🛡️</div>
                  <p className="text-xl font-semibold text-slate-800 dark:text-white">
                    Trusted coverage, transparent advice.
                  </p>
                  <p className="text-slate-600 dark:text-gray-300 mt-2">
                    Pan‑India partnerships • IRDAI‑compliant • Claims hand‑holding
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <Services embed />
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <Partners embed />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-700 text-white rounded-3xl my-12 mx-4 md:mx-0 p-8 md:p-12 shadow-lg">
        <div className="container text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to secure your future?</h2>
          <p className="text-lg md:text-xl">Get personalized advice and claim support from our experts today.</p>
          <NavLink to="/contact" className="btn btn-white text-brand-700 hover:bg-white/90 mt-4">
            Contact an Agent
          </NavLink>
        </div>
      </section>
    </div>
  );
}
