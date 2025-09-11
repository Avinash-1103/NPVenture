import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Partners from "./pages/Partners.jsx";
import Claims from "./pages/Claims.jsx";
import Contact from "./pages/Contact.jsx";
import FAQs from "./pages/FAQs.jsx";
import WhatsAppButton from "./components/WhatsAppSticky.jsx"; // Sticky WhatsApp
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

// Nav items
const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/partners", label: "Partners" },
  { to: "/claims", label: "Claims" },
  { to: "/faqs", label: "FAQs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Dark Mode Toggle Component
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-200 transition-colors">
      <Helmet>
        <title>NPVenture — Insurance & Claims Assistance</title>
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-slate-100 dark:border-gray-700">
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-bold">
              NP
            </div>
            <span className="text-lg font-semibold text-slate-800 dark:text-slate-200">NPVenture</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className="text-slate-700 dark:text-slate-200 hover:text-brand-700 transition font-medium"
              >
                {n.label}
              </NavLink>
            ))}
            <DarkModeToggle />
          </nav>

          {/* Mobile hamburger + dark mode */}
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-700 px-4 py-3 space-y-2 overflow-hidden"
            >
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="block text-slate-700 dark:text-slate-200 hover:text-brand-700 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {n.label}
                </NavLink>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </main>

      {/* Footer */}
      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
        <div className="container py-10 grid md:grid-cols-2 gap-8">
          {/* Left side: Logo + tagline + social */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-bold">
                NP
              </div>
              <span className="text-lg font-semibold">NPVenture</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              Your one-stop solution for all insurance needs across India. Compare, choose, and get claim support.
            </p>

            {/* Social Icons */}
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-red-600 hover:text-white transition"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Right side: Contact + email form */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-200 mb-3">CONTACT US</h4>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-4 mb-8 ">
              <li>
                <a href="mailto:npventure.official@gmail.com" className="hover:text-blue-500 ">
                  npventure.official@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919096768607" className="hover:text-blue-500">
                  +91 90967 68607
                </a>
              </li>
            </ul>

            {/* Email Input + Button */}
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email for inquiries"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-60 mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-3xl font-medium"
              >
                Request a Consultation
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 dark:border-gray-700 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} NPVenture. All rights reserved.
        </div>
      </footer>


      {/* Sticky WhatsApp icon */}
      <WhatsAppButton />
    </div>
  );
}
