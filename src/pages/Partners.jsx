import { motion } from "framer-motion";

const PARTNERS = {
  "Health Insurance": [
    { name: "Care Health Insurance", logo: "/logos/care.svg" },
    { name: "Tata AIG General Insurance", logo: "/logos/tata-aig.svg" },
    { name: "ICICI Lombard", logo: "/logos/ICICI-Lombard.png" },
    { name: "Star Health Insurance", logo: "/logos/starhealth.svg" },
    { name: "Reliance General Insurance", logo: "/logos/reliance.webp" },
  ],
  "Life Insurance": [
    { name: "Tata AIA", logo: "/logos/tataaia.svg" },
    { name: "LIC", logo: "/logos/lic.svg" },
  ],
  "Motor Insurance": [
    { name: "Tata AIG", logo: "/logos/tata-aig.svg" },
    { name: "ICICI Lombard", logo: "/logos/ICICI-Lombard.png" },
    { name: "Chola MS", logo: "/logos/cholams.png" },
    { name: "Go Digit", logo: "/logos/digit.svg" },
    { name: "Future Generali", logo: "/logos/future-generali.svg" },
    { name: "HDFC Ergo", logo: "/logos/hdfcergo.jpg" },
    { name: "Bajaj Allianz", logo: "/logos/bajaj.svg" },
    { name: "SBI General", logo: "/logos/sbi.png" },
    { name: "New India Assurance", logo: "/logos/NIA_logo.png" },
    { name: "National Insurance", logo: "/logos/national.svg" },
    { name: "Oriental Insurance", logo: "/logos/oriental.png" },
    { name: "Reliance Insurance", logo: "/logos/reliance.png" },
  ],
  "SME Insurance": [
    { name: "Tata AIG", logo: "/logos/tata-aig.svg" },
    { name: "ICICI Lombard", logo: "/logos/ICICI-Lombard.png" },
    { name: "HDFC Ergo", logo: "/logos/hdfcergo.jpg" },
  ],
  "Business Insurance": [
    { name: "Keyman Insurance", logo: "/logos/keyman.svg" },
  ],
};

export default function Partners() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Insurance Partners</h1>
        <p className="text-center text-gray-600 mb-10">
          We work with India’s leading insurance providers across multiple sectors.
        </p>

        {Object.entries(PARTNERS).map(([category, companies]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
              {companies.map((partner, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
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
        ))}
      </div>
    </section>
  );
}
