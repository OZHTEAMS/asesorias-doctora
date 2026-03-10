import portadaLibro from '../assets/libro-portada.jpg';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const BookSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Portada del Libro */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5"
            >
              <img 
                src={portadaLibro} 
                alt="Portada del Libro" 
                className="w-64 h-80 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Texto y Botón */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 flex flex-col justify-center"
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-4 leading-tight">
                Publicación Destacada
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                "Del aula al liderazgo: Coaching como estrategia innovadora para la excelencia universitaria"
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Una obra fundamental que explora los desafíos y oportunidades en la investigación académica moderna.
                Este libro ofrece insights profundos sobre metodologías innovadoras y estrategias para el éxito en el ámbito educativo.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.amazon.com/-/es/Dra-Nadeska-Gallardo-Lich%C3%A1a-ebook/dp/B0G81SYLNG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition duration-300 shadow-lg text-lg w-fit"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Adquirir en Amazon</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection;