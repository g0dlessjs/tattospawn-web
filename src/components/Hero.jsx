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
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Radial glow behind logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(57,255,20,0.12) 0%, rgba(57,255,20,0.04) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(57, 255, 20, ${0.15 + Math.random() * 0.3})`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.img
            src="/logo3.png"
            alt="TattoSpawn Logo"
            className="w-[22rem] sm:w-[28rem] md:w-[34rem] lg:w-[40rem] xl:w-[48rem] h-auto"
            animate={{
              filter: [
                "drop-shadow(0 0 15px rgba(57, 255, 20, 0.3))",
                "drop-shadow(0 0 30px rgba(57, 255, 20, 0.5))",
                "drop-shadow(0 0 15px rgba(57, 255, 20, 0.3))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-dark-100 mb-3 font-light tracking-wide"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Tinta que cuenta <span className="text-primary-500 font-semibold">tu historia</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-dark-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Diseños únicos y personalizados que transforman tus ideas en obras de arte permanentes
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary-600 hover:bg-primary-500 text-dark-950 font-semibold px-10 py-3.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-600/30 active:scale-95 flex items-center gap-2 text-lg"
          >
            <Calendar size={20} />
            Reservar Hora
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-2 border-primary-600 text-primary-500 hover:bg-primary-600 hover:text-dark-950 font-semibold px-10 py-3.5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 text-lg"
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
        transition={{ delay: 1.4 }}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={26} />
        </motion.div>
      </motion.button>
    </section>
  )
}
