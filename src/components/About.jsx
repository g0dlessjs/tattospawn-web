import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Clock, Heart, Palette } from 'lucide-react'

const stats = [
  { icon: Clock, value: '8+', label: 'Años de Experiencia' },
  { icon: Award, value: '2000+', label: 'Tatuajes Realizados' },
  { icon: Heart, value: '1500+', label: 'Clientes Satisfechos' },
  { icon: Palette, value: '100%', label: 'Diseños Únicos' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 bg-dark-900 relative"
      aria-label="Sobre mí"
    >
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-display font-semibold tracking-[0.2em] uppercase mb-3 text-sm">Conóceme</p>
          <h2 className="section-title">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <div className="w-20 h-px mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.6), transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-950/50">
              <div className="aspect-[3/4] bg-dark-800">
                <img
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop"
                  alt="TattoSpawn - Tatuador profesional en su estudio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-primary-600/30 rounded-2xl" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-dark-800 border border-dark-700 rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">8+</p>
                <p className="text-dark-300 text-sm">Años creando arte</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-wide">
              Transformando ideas en <span className="text-primary-500">arte permanente</span>
            </h3>
            
            <div className="space-y-4 text-dark-300 leading-relaxed">
              <p>
                Soy <strong className="text-white">TattoSpawn</strong>, un apasionado del arte corporal con más de 8 años de experiencia transformando ideas y emociones en tatuajes únicos. Mi viaje comenzó como una forma de expresión artística y se convirtió en mi vocación.
              </p>
              <p>
                Me especializo en <strong className="text-white">realismo, blackwork y diseños personalizados</strong>. Cada pieza que creo es el resultado de una colaboración cercana con mis clientes, asegurándome de que cada diseño refleje su esencia y historia personal.
              </p>
              <p>
                Mi estudio cumple con todos los estándares de higiene y seguridad, utilizando exclusivamente <strong className="text-white">equipos profesionales y tintas de alta calidad</strong>. Tu seguridad y satisfacción son mi prioridad.
              </p>
            </div>

            {/* Specialties */}
            <div className="mt-8">
              <h4 className="font-display text-lg text-white font-semibold mb-4 tracking-wide">Especialidades</h4>
              <div className="flex flex-wrap gap-3">
                {['Realismo', 'Blackwork', 'Neotradicional', 'Fine Line', 'Geométrico', 'Cover-up'].map((specialty) => (
                  <span
                    key={specialty}
                    className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-full text-sm text-dark-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-dark-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
    </section>
  )
}
