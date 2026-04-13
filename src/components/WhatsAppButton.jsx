import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '34600000000' // Replace with actual number
  const message = encodeURIComponent('¡Hola! Me gustaría información sobre tatuajes.')

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Chat popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-72 bg-dark-800 rounded-2xl shadow-2xl border border-dark-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-dark-950" />
                  </div>
                  <div>
                    <p className="text-dark-950 font-semibold">TattoSpawn</p>
                    <p className="text-dark-800/80 text-xs">En línea</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-dark-950/80 hover:text-dark-950 transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="bg-dark-700 rounded-lg p-3 mb-4">
                <p className="text-dark-200 text-sm">
                  ¡Hola! 👋 ¿Tienes alguna pregunta sobre tatuajes? Estamos aquí para ayudarte.
                </p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-primary-600 hover:bg-primary-500 text-dark-950 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Iniciar Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-600 hover:bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-600/30 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de WhatsApp"}
      >
        {/* Pulse animation - positioned behind the button */}
        {!isOpen && (
          <>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`absolute inset-0 rounded-full bg-primary-600 pulse-ring pulse-ring-delay-${i + 1}`}
                style={{ zIndex: -10 }}
              />
            ))}
          </>
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} className="text-dark-950" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} className="text-dark-950" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
