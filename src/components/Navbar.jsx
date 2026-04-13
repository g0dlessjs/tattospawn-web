import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Galería", href: "#gallery" },
  { name: "Reservar", href: "#booking" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/95 backdrop-blur-md shadow-lg shadow-dark-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="flex items-center"
          >
            <motion.img
              src="/logo-nav.png"
              alt="TattoSpawn Logo"
              width="160"
              height="80"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-dark-200 hover:text-primary-500 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => handleClick(e, "#booking")}
              className="btn-primary"
            >
              Reservar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary-500 transition-colors relative z-50"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-4 right-4 z-40"
          >
            <div className="bg-dark-800/95 backdrop-blur-lg rounded-2xl border border-dark-700/50 shadow-2xl shadow-black/40 overflow-hidden">
              {/* Decorative top line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent" />

              <div className="px-6 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-dark-200 hover:text-primary-500 hover:bg-dark-700/50 transition-all py-3 px-4 rounded-xl text-lg font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600/60" />
                    {link.name}
                  </motion.a>
                ))}

                {/* Divider */}
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-dark-600/50 to-transparent" />

                {/* CTA Button */}
                <motion.a
                  href="#booking"
                  onClick={(e) => handleClick(e, "#booking")}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block btn-primary text-center mt-2 py-3.5"
                >
                  Reservar Ahora
                </motion.a>
              </div>

              {/* Decorative bottom line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 -z-10 bg-primary-600/5 blur-2xl rounded-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
