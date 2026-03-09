import draYali from '../assets/dra-yali.jpeg';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Globe } from 'lucide-react';

const BioSection = () => {
  const bioText = `La Dra. Yaliangelica Briceño es una destacada profesional en el ámbito académico, especializada en investigación e innovación educativa. Con una trayectoria sólida en la dirección de proyectos de alto impacto, ha contribuido significativamente al desarrollo de programas curriculares y metodologías pedagógicas avanzadas.

Su experiencia abarca múltiples áreas del sector educativo, desde la gestión académica hasta la implementación de estrategias innovadoras que transforman el aprendizaje. Ha colaborado con instituciones nacionales e internacionales, promoviendo la excelencia académica y el desarrollo profesional continuo.`;

  const keyPoints = [
    { icon: Award, text: 'Dirección de Investigación y Proyectos Innovadores' },
    { icon: BookOpen, text: 'Gestión Curricular y Desarrollo Académico' },
    { icon: Users, text: 'Mentoría y Formación de Profesionales' },
    { icon: Globe, text: 'Experiencia Internacional en Educación' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Foto Profesional */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full overflow-hidden shadow-2xl"
            >
              <img
                src={draYali}
                alt="Dra. Yaliangelica Briceño"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Biografía y Puntos Clave */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-primary mb-6"
            >
              Biografía Profesional
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-loose mb-8 tracking-wide"
            >
              {bioText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                >
                  <point.icon className="w-8 h-8 text-secondary" />
                  <span className="text-gray-800 font-medium">{point.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;