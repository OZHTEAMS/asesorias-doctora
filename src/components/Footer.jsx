import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-bold">Dra. Yaliangelica Briceño</h3>
            <p className="text-sm opacity-80">Directora de Investigación e Innovación</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/ASESORIASPROFESIONALESYA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/AsesoriasEducativasYa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yaliangelica-briceño/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm opacity-80">© 2026 Dra. Yaliangelica Briceño. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;