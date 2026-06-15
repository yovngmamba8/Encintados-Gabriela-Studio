import { Heart, MessageCircle, Instagram } from 'lucide-react';
import { getWhatsAppLink } from '../data/constants';

const Footer = () => {
  return (
    <footer className="bg-gradient-pastel border-t border-brand-pink/20 pt-20 pb-8 px-6 text-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Final Call to Action banner inside footer */}
        <div className="bg-white/70 border border-brand-pink/30 rounded-3xl p-8 md:p-12 text-center shadow-soft max-w-4xl mx-auto w-full relative overflow-hidden">
          {/* Soft background decor */}
          <div className="absolute top-[-30px] left-[-30px] w-24 h-24 rounded-full bg-brand-pink-light/60 blur-xl" />
          
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div className="bg-brand-pink-light p-3 rounded-full text-brand-pink-dark">
              <Heart className="w-8 h-8 fill-brand-pink-dark" />
            </div>
            
            <h3 className="font-display text-2xl md:text-3.5xl font-bold">
              ¿Tienes un evento especial o una idea en mente?
            </h3>
            
            <p className="text-brand-dark/75 text-sm md:text-base leading-relaxed">
              ¡Hagámosla realidad juntos! Contáctanos directamente por WhatsApp Business. Te asesoramos con el diseño, las cintas, los colores y las temáticas para que tus recuerdos sean inolvidables.
            </p>
            
            <a 
              href={getWhatsAppLink('Hola! Me gustaría cotizar recuerdos personalizados para un evento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-bold text-base shadow-soft hover:shadow-lg transition-all flex items-center gap-2 hover:scale-[1.03]"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              Contactar por WhatsApp Business
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-brand-pink/20 pt-12">
          
          {/* Brand column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-2.5">
              <img 
                src="/images/logo.png" 
                alt="Encintados Gabriela Studio Logo" 
                loading="lazy"
                className="w-10 h-10 rounded-full border border-brand-pink/30 object-cover shadow-soft"
              />
              <span className="font-display text-lg font-bold text-gradient">
                Encintados Gabriela Studio
              </span>
            </div>
            <p className="text-xs text-brand-dark/60 leading-relaxed max-w-xs">
              Creamos detalles y recuerdos personalizados con amor y dedicación, entregando sonrisas en todo Chile.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <a href="#" className="hover:text-brand-pink-dark transition-colors py-2 px-2">Inicio</a>
            <a href="#sobre-nosotros" className="hover:text-brand-pink-dark transition-colors py-2 px-2">Nosotros</a>
            <a href="#galeria" className="hover:text-brand-pink-dark transition-colors py-2 px-2">Catálogo</a>
            <a href="#videos" className="hover:text-brand-pink-dark transition-colors py-2 px-2">Proceso</a>
          </div>

          {/* Social media links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="https://www.instagram.com/encintadosgabriela_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-brand-pink/30 hover:border-brand-pink text-brand-dark hover:text-brand-pink-dark p-2.5 rounded-full shadow-sm transition-all hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={getWhatsAppLink('Hola!')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-brand-pink/30 hover:border-brand-pink text-[#25D366] p-2.5 rounded-full shadow-sm transition-all hover:scale-105"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366]/10" />
            </a>
          </div>

        </div>

        {/* Copyright line */}
        <div className="text-center text-xs text-brand-dark/50 border-t border-brand-pink/10 pt-8 mt-2">
          <p>&copy; {new Date().getFullYear()} Encintados Gabriela Studio. Todos los derechos reservados. Hecho a mano con amor en Chile.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
