import { motion } from 'framer-motion';
import { Award, Target, Globe } from 'lucide-react';

const CredentialsBar = () => {
  const credentials = [
    {
      icon: Award,
      title: '+15 Años de Trayectoria',
      description: 'Experiencia consolidada en el sector académico'
    },
    {
      icon: Target,
      title: 'Proyectos de Alto Impacto',
      description: 'Desarrollo e implementación de iniciativas innovadoras'
    },
    {
      icon: Globe,
      title: 'Gestión Académica Internacional',
      description: 'Colaboración global en educación y formación'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary to-blue-800 text-white p-8 rounded-2xl shadow-lg text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <cred.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold mb-2">{cred.title}</h3>
              <p className="text-sm opacity-90">{cred.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsBar;