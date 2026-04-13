import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1590246814883-57c511e9caaf?q=80&w=400&auto=format&fit=crop',
    alt: 'Tatuaje de realismo en brazo',
    category: 'Realismo',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=400&auto=format&fit=crop',
    alt: 'Diseño blackwork geométrico',
    category: 'Blackwork',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=400&auto=format&fit=crop',
    alt: 'Tatuaje neotradicional colorido',
    category: 'Neotradicional',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=400&auto=format&fit=crop',
    alt: 'Tatuaje fine line delicado',
    category: 'Fine Line',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1542359649-6068fbd1d18c?q=80&w=400&auto=format&fit=crop',
    alt: 'Diseño geométrico abstracto',
    category: 'Geométrico',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1614094082869-cd4e4b2b0e24?q=80&w=400&auto=format&fit=crop',
    alt: 'Cover-up transformación',
    category: 'Cover-up',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=400&auto=format&fit=crop',
    alt: 'Tatuaje de retrato realista',
    category: 'Realismo',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400&auto=format&fit=crop',
    alt: 'Diseño minimalista',
    category: 'Fine Line',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=400&auto=format&fit=crop',
    alt: 'Tatuaje de manga completa',
    category: 'Neotradicional',
  },
]

const categories = ['Todos', ...new Set(galleryImages.map(img => img.category))]

function ImageModal({ image, onClose }) {
  if (!image) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors"
          aria-label="Cerrar modal"
        >
          <X size={32} />
        </button>
        
        <img
          src={image.src.replace('w=400', 'w=1200')}
          alt={image.alt}
          width="1200"
          height="1200"
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          loading="eager"
        />
        
        <div className="mt-4 text-center">
          <p className="text-white font-semibold">{image.alt}</p>
          <p className="text-primary-400 text-sm">{image.category}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Todos')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredImages = activeCategory === 'Todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section 
      id="gallery" 
      className="py-20 md:py-32 bg-dark-950 relative"
      aria-label="Galería de trabajos"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-display font-semibold tracking-[0.2em] uppercase mb-3 text-sm">Portfolio</p>
          <h2 className="section-title">
            Mi <span className="gradient-text">Galería</span>
          </h2>
          <p className="section-subtitle">
            Cada tatuaje es una obra de arte única. Explora mi trabajo y encuentra inspiración para tu próximo diseño.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-dark-950 shadow-lg shadow-primary-600/30'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-xl bg-dark-800 cursor-pointer card-hover"
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width="400"
                  height="400"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-primary-400 font-semibold">{image.category}</p>
                        <p className="text-dark-300 text-sm">{image.alt}</p>
                      </div>
                      <motion.div
                        className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ZoomIn size={18} className="text-dark-950" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
    </section>
  )
}
