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
import WhatsAppButton from "./components/WhatsAppSticky.jsx";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

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

// Dark Mode Toggle
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

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
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition"
      title="Toggle Dark Mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <Helmet>
        <title>NPVenture — Insurance & Claims Assistance</title>
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-slate-100 dark:border-gray-700">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-0">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-bold text-lg">
              NP
            </div>
            <span className="text-xl font-semibold text-slate-800 dark:text-slate-200">NPVenture</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `font-medium transition hover:text-brand-500 ${isActive ? "text-brand-600" : "text-slate-700 dark:text-slate-200"
                  }`
                }
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

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-700 px-4 py-4 space-y-2 overflow-hidden"
            >
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="block text-slate-700 dark:text-slate-200 font-medium hover:text-brand-500"
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
      <footer className="border-t border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto py-12 grid md:grid-cols-2 gap-8 px-4 md:px-0">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-bold">
                NP
              </div>
              <span className="text-lg font-semibold">NPVenture</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              One-stop solution for insurance across India. Compare plans, choose wisely, get claim support.
            </p>
            <div className="flex gap-3 mt-4">
              {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-brand-500 hover:text-white transition"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form / CTA */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">CONTACT US</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-4 mb-8">
              <li>
                <a href="mailto:npventure.official@gmail.com" className="hover:text-blue-500">
                  npventure.official@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919096768607" className="hover:text-blue-500">
                  +91 90967 68607
                </a>
              </li>
            </ul>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="bg-brand-500 hover:bg-brand-600 text-white py-2 rounded-3xl font-medium mt-2">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-gray-700 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} NPVenture. All rights reserved.
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
