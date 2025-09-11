import { useState } from "react";
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
import { Helmet } from "react-helmet-async";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/partners", label: "Partners" },
  { to: "/claims", label: "Claims" },
  { to: "/faqs", label: "FAQs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>NPVenture — Insurance & Claims Assistance</title>
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-bold">
              NP
            </div>
            <span className="text-lg font-semibold text-slate-800">NPVenture</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className="text-slate-700 hover:text-brand-700 transition font-medium"
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu with animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2 overflow-hidden"
            >
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="block text-slate-700 hover:text-brand-700 font-medium"
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
      <footer className="border-t border-slate-200 bg-white">
        <div className="container py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-bold">
                NP
              </div>
              <span className="text-lg font-semibold">NPVenture</span>
            </div>
            <p className="text-slate-600 text-sm">
              Your one-stop solution for all insurance needs across India. Compare, choose, and get claim support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              {nav.slice(1, -1).map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} className="text-slate-600 hover:text-brand-700">
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Phone: +91 90967 68607</li>
              <li>Email: npventure.official@gmail.com</li>
              <li>
                Address: Shop No.7, Payal Apartment, Bharti Vidyapeeth Dattanagar Road,
                Katraj Ambegaon BK Pune, MH
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input type="email" required placeholder="Enter your email" className="input" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NPVenture. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
