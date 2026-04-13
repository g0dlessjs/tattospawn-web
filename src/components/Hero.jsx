import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

export default function Hero() {
  const handleScroll = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Sección principal - TattoSpawn"
    >
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Large glow behind logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(57,255,20,0.12) 0%, rgba(57,255,20,0.04) 40%, transparent 65%)",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary-600/20 rounded-tl-lg pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary-600/20 rounded-tr-lg pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary-600/20 rounded-bl-lg pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary-600/20 rounded-br-lg pointer-events-none hidden md:block" />

      {/* ===== PARTICLES ===== */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(57, 255, 20, ${0.08 + Math.random() * 0.35})`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* ===== MAIN CONTENT - TWO COLUMNS ===== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* LEFT - MASSIVE LOGO */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-6/12 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Glow behind logo */}
              <div
                className="absolute inset-0  md:-inset-40 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(57,255,20,0.3), transparent)",
                }}
              />
              <motion.img
                src="/logo3.png"
                alt="TattoSpawn Logo"
                className="relative w-[85vw] sm:w-[65vw] md:w-[40vw] lg:w-[42rem] xl:w-[52rem] h-auto max-w-none"
                animate={{
                  filter: [
                    "drop-shadow(0 0 30px rgba(57, 255, 20, 0.2))",
                    "drop-shadow(0 0 70px rgba(57, 255, 20, 0.45))",
                    "drop-shadow(0 0 30px rgba(57, 255, 20, 0.2))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT - TEXT CONTENT */}
          <motion.div
            className="flex flex-col items-center lg:items-start w-full lg:w-6/12"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top label */}
            <div className="flex items-center gap-2 sm:gap-3 mb-5">
              <div className="w-4 sm:w-9 h-px bg-primary-600/60" />
              <span className="font-display text-[8px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary-500/80 font-semibold text-center">
                Estudio de Tatuajes Profesional
              </span>
              <div className="w-4 sm:w-8 h-px bg-primary-600/60" />
            </div>

            {/* Tagline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-dark-50 mb-4 text-center lg:text-left tracking-[0.06em] leading-tight">
              Tinta que cuenta{" "}
              <span className="gradient-text font-bold">tu historia</span>
            </h2>

            {/* Sub-description */}
            <p className="text-dark-400 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-6 text-center lg:text-left leading-relaxed font-light tracking-wide">
              Diseños exclusivos creados a medida — cada pieza es una obra de
              arte única e irrepetible
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 sm:w-20 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(57,255,20,0.5))",
                }}
              />
              <Sparkles size={16} className="text-primary-500/70" />
              <div
                className="w-12 sm:w-20 h-px"
                style={{
                  background:
                    "linear-gradient(270deg, transparent, rgba(57,255,20,0.5))",
                }}
              />
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
              {/* Primary CTA */}
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold px-12 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-600/25 active:scale-95 flex items-center gap-3 text-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <Calendar size={20} className="relative" />
                <span className="relative">Reservar Hora</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative border border-primary-600/50 text-primary-500 hover:bg-primary-600/10 hover:border-primary-500/80 font-semibold px-12 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center gap-3 text-lg"
              >
                <Sparkles size={18} className="relative" />
                <span className="relative">Ver Trabajos</span>
              </a>
            </div>

            {/* STATS BAR */}
            <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-12">
              {[
                { value: "8+", label: "Años" },
                { value: "2K+", label: "Tatuajes" },
                { value: "1.5K+", label: "Clientes" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="text-center"
                >
                  <p className="font-display text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-dark-500 text-xs md:text-sm tracking-[0.15em] uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.35em] uppercase text-dark-500 group-hover:text-primary-500 transition-colors">
            Explorar
          </span>
          <div className="w-5 h-7 rounded-full border border-dark-600 group-hover:border-primary-600/60 transition-colors flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 rounded-full bg-primary-500/70"
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
}
