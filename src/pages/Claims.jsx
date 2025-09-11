import { motion } from "framer-motion";

const STEPS = [
  { t: "Notify & Document", d: "Tell us about the incident. We help list documents you need." },
  { t: "Submit Claim", d: "We prepare and file your claim with the insurer correctly, the first time." },
  { t: "Track & Coordinate", d: "We follow up with surveyors/TPA and keep you updated." },
  { t: "Settlement", d: "We assist till you receive the approved amount." },
];

export default function Claims() {
  return (
    <section className="section transition-colors duration-300">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Claims Assistance</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          End-to-end help for all policy types — Health, Motor, Life, Property, Travel, and more.
        </p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.t}
              className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-3xl font-bold text-brand-700">{i + 1}</div>
              <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white">{s.t}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{s.d}</p>
            </motion.div>
          ))}
        </div>
        <a href="/contact" className="btn btn-primary mt-8">Start a Claim</a>
      </div>
    </section>
  );
}
