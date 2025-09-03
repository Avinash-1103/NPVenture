import { motion } from "framer-motion";

const PARTNERS = [
  { name: "LIC", logo: "/logos/lic.svg" },
  { name: "HDFC Life", logo: "/logos/HDFC_Life_Logo.svg.png" },
  "ICICI Prudential", "SBI Life", "Max Life",
  "Bajaj Allianz", "Tata AIG", "Star Health", "New India Assurance", "Oriental Insurance"
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
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
