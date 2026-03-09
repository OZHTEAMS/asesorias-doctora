import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Social Links Bar */}
      <div className="bg-primary py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end space-x-4">
          <a
            href="https://www.instagram.com/ASESORIASPROFESIONALESYA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/AsesoriasEducativasYa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yaliangelica-briceño/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-primary">Dra. Yaliangelica Briceño</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#hero" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="#bio" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Biografía</a>
              <a href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;