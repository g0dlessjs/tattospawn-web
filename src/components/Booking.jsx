import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Palette, 
  Ruler, 
  MapPin, 
  MessageSquare, 
  Upload, 
  DollarSign,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const bookingSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres').max(100),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono inválido').max(15),
  age: z.string().min(1, 'Debes ser mayor de edad').refine((val) => parseInt(val) >= 18, 'Debes ser mayor de 18 años'),
  tattooType: z.string().min(1, 'Selecciona un tipo de tatuaje'),
  size: z.string().min(1, 'Selecciona un tamaño'),
  bodyZone: z.string().min(1, 'Selecciona una zona del cuerpo'),
  description: z.string().min(20, 'Describe tu idea con al menos 20 caracteres').max(1000),
  availability: z.string().min(1, 'Indica tu disponibilidad'),
  budget: z.string().min(1, 'Indica tu presupuesto estimado'),
  referenceImage: z.any().optional(),
})

const tattooTypes = [
  'Realismo',
  'Blackwork',
  'Neotradicional',
  'Fine Line',
  'Geométrico',
  'Acuarela',
  'Old School',
  'Japonés',
  'Lettering',
  'Cover-up',
  'Otro',
]

const sizes = ['Pequeño (< 10cm)', 'Mediano (10-20cm)', 'Grande (20-30cm)', 'Extra Grande (> 30cm)']

const bodyZones = [
  'Brazo',
  'Antebrazo',
  'Pierna',
  'Espalda',
  'Pecho',
  'Hombro',
  'Cuello',
  'Mano',
  'Costillas',
  'Otro',
]

const availabilityOptions = [
  'Mañanas (Lunes a Viernes)',
  'Tardes (Lunes a Viernes)',
  'Fines de semana',
  'Flexible',
]

const budgetRanges = [
  'Menos de $50.000 CLP',
  '$50.000 - $100.000 CLP',
  '$100.000 - $200.000 CLP',
  '$200.000 - $400.000 CLP',
  'Más de $400.000 CLP',
  'A consultar',
]

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bookingSchema),
  })

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen no debe superar los 5MB')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setImagePreview(null)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const InputField = ({ label, icon: Icon, error, children }) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-dark-200 font-medium">
        <Icon size={18} className="text-primary-600" />
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary-500 text-sm flex items-center gap-1"
        >
          <AlertCircle size={14} />
          {error.message}
        </motion.p>
      )}
    </div>
  )

  const inputClasses = "w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all duration-300"
  const selectClasses = `${inputClasses} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b6b6b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_1rem_center] bg-no-repeat pr-12`

  return (
    <section 
      id="booking" 
      className="py-20 md:py-32 bg-dark-900 relative"
      aria-label="Formulario de reserva"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-display font-semibold tracking-[0.2em] uppercase mb-3 text-sm">Contacto</p>
          <h2 className="section-title">
            Reserva tu <span className="gradient-text">Hora</span>
          </h2>
          <p className="section-subtitle">
            Cuéntame tu idea y juntos la haremos realidad. Completa el formulario y me pondré en contacto contigo en menos de 24 horas.
          </p>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-green-900/30 border border-green-700 rounded-xl flex items-center gap-3"
          >
            <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
            <div>
              <p className="text-green-400 font-semibold">¡Reserva enviada con éxito!</p>
              <p className="text-green-300/80 text-sm">Me pondré en contacto contigo lo antes posible.</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-dark-800/50 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-dark-700"
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <InputField label="Nombre completo" icon={User} error={errors.name}>
              <input
                type="text"
                {...register('name')}
                placeholder="Tu nombre"
                className={inputClasses}
              />
            </InputField>

            {/* Email */}
            <InputField label="Email" icon={Mail} error={errors.email}>
              <input
                type="email"
                {...register('email')}
                placeholder="tu@email.com"
                className={inputClasses}
              />
            </InputField>

            {/* Phone */}
            <InputField label="Teléfono / WhatsApp" icon={Phone} error={errors.phone}>
              <input
                type="tel"
                {...register('phone')}
                placeholder="+56 9 1234 5678"
                className={inputClasses}
              />
            </InputField>

            {/* Age */}
            <InputField label="Edad" icon={User} error={errors.age}>
              <input
                type="number"
                {...register('age')}
                placeholder="Debes ser mayor de 18"
                min="18"
                max="100"
                className={inputClasses}
              />
            </InputField>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tattoo Type */}
            <InputField label="Tipo de tatuaje" icon={Palette} error={errors.tattooType}>
              <select {...register('tattooType')} className={selectClasses} defaultValue="">
                <option value="" disabled>Selecciona un estilo</option>
                {tattooTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </InputField>

            {/* Size */}
            <InputField label="Tamaño aproximado" icon={Ruler} error={errors.size}>
              <select {...register('size')} className={selectClasses} defaultValue="">
                <option value="" disabled>Selecciona un tamaño</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </InputField>
          </div>

          {/* Body Zone */}
          <InputField label="Zona del cuerpo" icon={MapPin} error={errors.bodyZone}>
            <select {...register('bodyZone')} className={selectClasses} defaultValue="">
              <option value="" disabled>¿Dónde quieres el tatuaje?</option>
              {bodyZones.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </InputField>

          {/* Description */}
          <InputField label="Describe tu idea" icon={MessageSquare} error={errors.description}>
            <textarea
              {...register('description')}
              placeholder="Cuéntame los detalles de tu idea: temática, elementos específicos, significado..."
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </InputField>

          {/* Availability & Budget */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField label="Disponibilidad" icon={Calendar} error={errors.availability}>
              <select {...register('availability')} className={selectClasses} defaultValue="">
                <option value="" disabled>¿Cuándo estás disponible?</option>
                {availabilityOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </InputField>

            <InputField label="Presupuesto estimado" icon={DollarSign} error={errors.budget}>
              <select {...register('budget')} className={selectClasses} defaultValue="">
                <option value="" disabled>Selecciona un rango</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </InputField>
          </div>

          {/* Reference Image Upload */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-dark-200 font-medium">
              <Upload size={18} className="text-primary-600" />
              Imagen de referencia (opcional)
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="reference-image"
              />
              <label
                htmlFor="reference-image"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-dark-600 rounded-lg cursor-pointer hover:border-primary-600 transition-colors"
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-full object-contain rounded-lg" />
                ) : (
                  <>
                    <Upload size={24} className="text-dark-500 mb-2" />
                    <p className="text-dark-400 text-sm">
                      Arrastra una imagen o <span className="text-primary-500">haz clic aquí</span>
                    </p>
                    <p className="text-dark-500 text-xs mt-1">PNG, JPG hasta 5MB</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 hover:bg-primary-500 text-dark-950 font-semibold py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-primary-600/30"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Enviando...
              </>
            ) : (
              <>
                <Calendar size={20} />
                Enviar Reserva
              </>
            )}
          </motion.button>

          <p className="text-dark-500 text-xs text-center">
            Al enviar este formulario, aceptas que tus datos sean utilizados para contactarte respecto a tu reserva.
          </p>
        </motion.form>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />
    </section>
  )
}
