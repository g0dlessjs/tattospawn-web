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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gradient-to-b from-gray-900 via-dark-950 to-dark-950 border-t border-dark-800 absolute top-20 left-0 right-0 shadow-lg shadow-dark-950/50 z-40"
          >
            <div className="px-6 py-6 space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block text-dark-200 hover:text-primary-500 transition-colors py-2 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={(e) => handleClick(e, "#booking")}
                className="block btn-primary text-center mt-4"
              >
                Reservar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
