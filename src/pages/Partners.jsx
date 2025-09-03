import { motion } from "framer-motion";

const PARTNERS = [
  { name: "LIC", logo: "/logos/lic.svg" },
  { name: "HDFC Life", logo: "/logos/HDFC_Life_Logo.svg.png" },
  { name: "ICICI Prudential", logo: "/logos/icici.svg" },
  { name: "SBI Life", logo: "/logos/sbi.svg" },
  { name: "Max Life", logo: "/logos/maxlife.svg" },
  { name: "Bajaj Allianz", logo: "/logos/bajaj.svg" },
  { name: "Tata AIG", logo: "/logos/tata-aig.svg" },
  { name: "Star Health", logo: "/logos/starhealth.svg" },
  { name: "New India Assurance", logo: "/logos/newindia.svg" },
  { name: "Oriental Insurance", logo: "/logos/oriental.svg" },
];

export default function Partners() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Insurance Partners</h1>
        <p className="text-center text-gray-600 mb-10">
          We work with India’s top insurance companies to bring you the best options.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
