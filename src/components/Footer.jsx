import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-dark-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="font-display text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src="/logo3.png" alt="TattoSpawn" className="h-16 w-auto" />
            </motion.h3>
            <p className="text-dark-400 max-w-md mb-6">
              Estudio de tatuajes profesional especializado en diseños únicos y personalizados. 
              Cada pieza es creada específicamente para ti, reflejando tu esencia y personalidad.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-dark-950 transition-all duration-300"
                aria-label="Síguenos en Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-dark-950 transition-all duration-300"
                aria-label="Síguenos en Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@tattospawn.com" className="flex items-center gap-3 text-dark-400 hover:text-primary-500 transition-colors">
                  <Mail size={18} />
                  <span>info@tattospawn.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+34600000000" className="flex items-center gap-3 text-dark-400 hover:text-primary-500 transition-colors">
                  <Phone size={18} />
                  <span>+34 600 000 000</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-dark-400">
                  <MapPin size={18} />
                  <span>Calle Principal 123, Madrid</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-dark-400">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            © {currentYear} TattoSpawn. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-dark-500 hover:text-primary-500 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-dark-500 hover:text-primary-500 transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
