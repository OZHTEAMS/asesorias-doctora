import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import CredentialsBar from './components/CredentialsBar';
import BioSection from './components/BioSection';
import BookSection from './components/BookSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-sans bg-background min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <CredentialsBar />
        <BioSection />
        <BookSection />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;