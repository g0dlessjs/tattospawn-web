import { motion } from 'framer-motion'
import { Calendar, ArrowDown } from 'lucide-react'

export default function Hero() {
  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal - TattoSpawn"
    >
      {/* Pure dark background */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Green radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(57,255,20,0.15) 0%, rgba(57,255,20,0.05) 35%, transparent 65%)',
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 4}px`,
              height: `${1 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(57, 255, 20, ${0.1 + Math.random() * 0.4})`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(57,255,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-4 max-w-5xl mx-auto">
        {/* Logo - massive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12"
        >
          <motion.img
            src="/logo3.png"
            alt="TattoSpawn Logo"
            className="w-[18rem] sm:w-[24rem] md:w-[32rem] lg:w-[40rem] xl:w-[48rem] h-auto"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(57, 255, 20, 0.25))",
                "drop-shadow(0 0 40px rgba(57, 255, 20, 0.45))",
                "drop-shadow(0 0 20px rgba(57, 255, 20, 0.25))",
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 md:w-32 h-px mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.6), transparent)',
          }}
        />

        {/* Tagline */}
        <motion.p
          className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-100 mb-3 tracking-[0.15em] uppercase text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Tinta que cuenta <span className="text-primary-500 font-bold">tu historia</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-dark-400 text-sm md:text-base max-w-lg mx-auto mb-10 text-center leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Diseños únicos y personalizados que transforman tus ideas en obras de arte permanentes
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 text-base md:text-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Calendar size={20} />
            Reservar Hora
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative border border-primary-600/60 text-primary-500 hover:bg-primary-600 hover:text-dark-950 hover:border-primary-500 font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 text-base md:text-lg"
          >
            Ver Trabajos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-dark-500 hover:text-primary-500 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-dark-500">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
