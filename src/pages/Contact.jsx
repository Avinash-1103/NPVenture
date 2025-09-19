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
    setStatus(""); // clear status; actual submission handled by iframe
  };

  return (
    <section className="section transition-colors duration-300 bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start px-4">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Fill the form and our agent will reach out. You can also email{" "}
            <a
              className="text-teal-600 underline"
              href="mailto:npventure.official@gmail.com"
            >
              npventure.official@gmail.com
            </a>{" "}
            or call +91 90967 68607.
          </p>

          <form
            ref={formRef}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxhTla0o-jEBTKS4t9f09izZhQ1fBYTq3daiS51SZHCYOX1Q0S8yrcmnKCF1tkJ1Z8U/exec"
            onSubmit={onSubmit}
            target="hidden_iframe"
            className="card p-6 mt-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div>
              <label className="label text-gray-900 dark:text-white">Name</label>
              <input
                name="name"
                required
                className="input dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                placeholder="Your full name"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label text-gray-900 dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="label text-gray-900 dark:text-white">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="input dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="label text-gray-900 dark:text-white">Insurance Type</label>
              <select
                name="insuranceType"
                className="input dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                defaultValue="Choose Insurance Type"
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
              <label className="label text-gray-900 dark:text-white">Message</label>
              <textarea
                name="message"
                rows="4"
                className="input dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                placeholder="Tell us about your requirement"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg transition"
            >
              Send Message
            </button>

            <div className="flex items-center my-2">
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
              <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>

            <button
              type="button"
              onClick={() => window.open(buildWhatsAppLink(), "_blank")}
              className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-2 text-center block rounded-lg py-2"
            >
              Contact on WhatsApp
            </button>

            {status && <p className="text-green-600 mt-2 text-center">{status}</p>}
          </form>

          {/* Hidden iframe to prevent page reload */}
          <iframe
            name="hidden_iframe"
            style={{ display: "none" }}
            onLoad={() => setStatus("Message sent!")}
          />

          {/* Office Info */}
          <div className="card p-6 mt-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              Shop No.7, Payal Apartment, Bharti Vidyapeeth Dattanagar Road, Katraj Ambegaon BK Pune, MH
              <br />
              Phone: +91 90967 68607
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition">
          <iframe
            title="Map"
            className="w-full h-80 rounded-xl"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.758%2C18.548%2C73.82%2C18.575&layer=mapnik"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Approximate service location — pan-India support available.
          </p>
        </div>
      </div>
    </section>
  );
}
