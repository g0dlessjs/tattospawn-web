import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src="/logo3.png"
            alt="TattoSpawn"
            width="256"
            height="256"
            className="w-48 md:w-64 mx-auto"
            animate={{ 
              filter: [
                "drop-shadow(0 0 10px rgba(57, 255, 20, 0.3))",
                "drop-shadow(0 0 20px rgba(57, 255, 20, 0.6))",
                "drop-shadow(0 0 10px rgba(57, 255, 20, 0.3))",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Animated loading bar */}
        <div className="w-48 h-1 bg-dark-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-700 via-primary-500 to-primary-700"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>

        {/* Pulsing dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
