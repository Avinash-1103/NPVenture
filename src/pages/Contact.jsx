import React, { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const buildWhatsAppLink = () => {
    const base = "https://wa.me/919096768607";
    if (!formRef.current) return `${base}?text=Hello, I have a query.`;
    const data = new FormData(formRef.current);
    let parts = [];
    for (const [k, v] of data.entries()) {
      if (v.trim() && !(k === "insuranceType" && v === "Choose Insurance Type"))
        parts.push(`${k}: ${v}`);
    }
    return parts.length === 0
      ? `${base}?text=Hello, I have a query.`
      : `${base}?text=${encodeURIComponent(parts.join("\n"))}`;
  };

  const onSubmit = (e) => {
    // Keep Google Sheets submission working via form + iframe
    setStatus("");
    setTimeout(() => {
      // Open WhatsApp after form submit
      window.open(buildWhatsAppLink(), "_blank");
    }, 500); // small delay ensures Google receives data
  };

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Fill out the form below and our agent will reach out. You can also{" "}
            <a
              href="mailto:npventure.official@gmail.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              email us
            </a>{" "}
            or call <span className="font-semibold">+91 90967 68607</span>.
          </p>

          <form
            ref={formRef}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxhTla0o-jEBTKS4t9f09izZhQ1fBYTq3daiS51SZHCYOX1Q0S8yrcmnKCF1tkJ1Z8U/exec"
            onSubmit={onSubmit}
            target="hidden_iframe"
            className="mt-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow space-y-6"
          >
            {/* --- Inputs remain same --- */}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                name="name"
                placeholder="Your full name"
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Insurance Type
              </label>
              <select
                name="insuranceType"
                defaultValue="Choose Insurance Type"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
              >
                <option disabled>Choose Insurance Type</option>
                <option>Life</option>
                <option>Health</option>
                <option>Vehicle</option>
                <option>Travel</option>
                <option>Property</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your requirement"
                rows="4"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
              ></textarea>
            </div>

            {/* --- Single Button --- */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-green-600 text-sm mt-2">{status}</p>
            )}
          </form>

          {/* Hidden iframe */}
          <iframe
            name="hidden_iframe"
            style={{ display: "none" }}
            onLoad={() => setStatus("Message sent !")}
          />
        </div>

        {/* Right: Office Info + Map stays same */}
        <div className="mt-6 md:mt-12 space-y-6 ">

          <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow ">
            <iframe
              title="Map"
              className="w-full h-80 rounded-xl"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.758%2C18.548%2C73.82%2C18.575&layer=mapnik"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Approximate service location — pan-India support available.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Our Office
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
              Shop No.7, Payal Apartment, Bharti Vidyapeeth Dattanagar Road,
              Katraj, Ambegaon BK, Pune, MH
              <br />
              Phone: +91 90967 68607
              <br />
              Email: npventure.official@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
