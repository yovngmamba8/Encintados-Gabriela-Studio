import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/constants';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-effect sticky top-0 z-50 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo container */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/images/logo.png" 
            alt="Encintados Gabriela Studio Logo" 
            className="w-12 h-12 rounded-full border border-brand-pink/30 object-cover shadow-soft group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg md:text-xl font-bold tracking-tight text-gradient">
              Encintados Gabriela Studio
            </span>
            <span className="text-[10px] text-brand-dark/60 tracking-wider font-semibold uppercase -mt-1">
              Hecho a mano con amor
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="text-brand-dark/85 hover:text-brand-pink-dark transition-colors relative group py-2">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-dark transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#sobre-nosotros" className="text-brand-dark/85 hover:text-brand-pink-dark transition-colors relative group py-2">
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-dark transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#galeria" className="text-brand-dark/85 hover:text-brand-pink-dark transition-colors relative group py-2">
            Catálogo
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-dark transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#videos" className="text-brand-dark/85 hover:text-brand-pink-dark transition-colors relative group py-2">
            Proceso
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-dark transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#testimonios" className="text-brand-dark/85 hover:text-brand-pink-dark transition-colors relative group py-2">
            Reseñas
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-dark transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a 
            href={getWhatsAppLink('Hola! Me gustaría cotizar un regalo personalizado.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-pink-purple text-white px-5 py-2.5 rounded-full font-semibold shadow-soft hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            ¿Tienes una idea? Podemos realizarla 
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-dark hover:text-brand-pink-dark focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white/95 rounded-2xl p-4 border border-brand-pink/10 shadow-lg flex flex-col gap-4"
          >
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-dark font-medium py-2 px-3 rounded-lg hover:bg-brand-pink-light/50 hover:text-brand-pink-dark transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#sobre-nosotros" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-dark font-medium py-2 px-3 rounded-lg hover:bg-brand-pink-light/50 hover:text-brand-pink-dark transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="#galeria" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-dark font-medium py-2 px-3 rounded-lg hover:bg-brand-pink-light/50 hover:text-brand-pink-dark transition-colors"
            >
              Catálogo
            </a>
            <a 
              href="#videos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-dark font-medium py-2 px-3 rounded-lg hover:bg-brand-pink-light/50 hover:text-brand-pink-dark transition-colors"
            >
              Proceso
            </a>
            <a 
              href={getWhatsAppLink('Hola! Me gustaría cotizar un regalo personalizado.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-pink-purple text-white py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2 shadow-soft"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Cotizar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
