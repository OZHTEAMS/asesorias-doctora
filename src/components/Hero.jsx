import { motion } from 'framer-motion';
import { MessageCircle, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-serif font-bold mb-4 tracking-wide leading-tight"
          >
            Dra. Yaliangelica Briceño
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl mb-8 text-secondary font-medium tracking-wide leading-relaxed"
          >
            Directora de Investigación e Innovación | Gestión Académica de Alto Impacto
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/573124794775"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold hover:bg-amber-700 transition duration-300 flex items-center space-x-2 shadow-lg text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Contactar vía WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;