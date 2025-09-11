import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We are a team of IRDAI-licensed advisors helping individuals and businesses choose the right policies and get hassle-free claim support. We partner with all major insurers in India to bring unbiased comparisons and guidance.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-2xl font-bold text-brand-700">5+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Years Experience</div>
            </div>
            <div className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-2xl font-bold text-brand-700">20+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Insurer Partners</div>
            </div>
            <div className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-2xl font-bold text-brand-700">5k+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Claims Assisted</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card p-6 space-y-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To simplify insurance for everyone with honest advice, transparent comparisons, and dependable claim support.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To be India’s most trusted insurance service platform.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Why Choose Us</h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
            <li>All insurers on one platform</li>
            <li>Tailored recommendations for your needs</li>
            <li>End-to-end claims assistance</li>
            <li>No hidden costs, no jargon</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
