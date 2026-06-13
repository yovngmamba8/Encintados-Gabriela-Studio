import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, ShoppingBag, Heart, Award } from 'lucide-react';
import { HERO_SLIDES, getWhatsAppLink } from '../data/constants';

const Hero = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-6 md:py-32">
      {/* Background decorative blurry spheres */}
      <div className="absolute top-20 left-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-pink-light/40 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-purple-light/40 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 flex flex-col gap-6 text-center md:text-left"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-brand-pink-light border border-brand-pink/30 px-4 py-1.5 rounded-full text-brand-pink-dark font-semibold text-xs md:text-sm self-center md:self-start shadow-sm">
            <Star className="w-3.5 h-3.5 fill-brand-pink-dark" />
            <span>Diseño hecho a mano, 100% único</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-brand-dark">
            Crea con el corazón,<br />
            <span className="text-gradient">regala momentos y sonrisas.</span>
          </h1>

          <p className="text-base md:text-lg text-brand-dark/75 max-w-xl leading-relaxed">
            En Encintados Gabriela Studio transformamos tus ideas en detalles únicos y personalizados, hechos a mano con amor, dedicación y creatividad.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-2">
            <a 
              href={getWhatsAppLink('Hola! Me gustaría cotizar mi regalo hoy.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-pink-dark hover:bg-brand-pink-dark/90 text-white px-8 py-4 rounded-full font-bold text-base shadow-soft hover:shadow-lg transition-all flex items-center justify-center gap-2 group hover:scale-[1.03] active:scale-[0.97]"
            >
              <span>Cotiza tu regalo hoy</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#galeria"
              className="w-full sm:w-auto bg-white hover:bg-brand-pink-light/30 text-brand-dark border border-brand-pink/40 px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              <ShoppingBag className="w-5 h-5 text-brand-pink-dark" />
              Ver Catálogo
            </a>
          </div>

          {/* Micro value propositions */}
          <div className="grid grid-cols-3 gap-4 border-t border-brand-pink/20 pt-8 mt-4 text-center">
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-brand-pink-dark">100%</p>
              <p className="text-xs text-brand-dark/65 font-medium mt-1">Personalizado</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-brand-purple">Amor</p>
              <p className="text-xs text-brand-dark/65 font-medium mt-1">En cada detalle</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-brand-gold-dark">Envíos</p>
              <p className="text-xs text-brand-dark/65 font-medium mt-1">A todo Chile</p>
            </div>
          </div>

        </motion.div>

        {/* Right Visual Image Column - Portfolio Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 relative flex justify-center"
        >
          {/* Visual Frame */}
          <div className="relative w-full max-w-[380px] md:max-w-full aspect-square">
            {/* Spinning background circles */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-pastel rotate-3 scale-102 -z-10 shadow-soft" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-brand-pink-light/70 -rotate-3 scale-98 -z-20" />
            
            {/* Product main display card */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-white shadow-premium relative bg-white select-none">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={heroIndex}
                  src={HERO_SLIDES[heroIndex].image} 
                  alt={HERO_SLIDES[heroIndex].title} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover product-image-filter absolute inset-0"
                />
              </AnimatePresence>
              
              {/* Floating tags */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md px-5 py-4 rounded-2xl border border-brand-pink/20 shadow-lg flex items-center justify-between z-10">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={heroIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-display font-bold text-brand-dark text-sm leading-tight">
                        {HERO_SLIDES[heroIndex].title}
                      </h4>
                      <p className="text-xs text-brand-dark/60 font-medium mt-0.5">
                        {HERO_SLIDES[heroIndex].subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="bg-brand-pink-dark text-white p-2.5 rounded-full shadow-sm hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
              </div>

              {/* Pagination Dots indicator inside the card */}
              <div className="absolute top-6 left-6 bg-brand-dark/70 text-white backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold z-10 flex gap-1 items-center">
                {HERO_SLIDES.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${heroIndex === idx ? 'bg-brand-pink scale-110' : 'bg-white/40'}`} 
                  />
                ))}
              </div>
            </div>

            {/* Little Floating Decorative Circle */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-20px] right-[-20px] bg-white border border-brand-pink/30 p-4 rounded-2xl shadow-lg flex flex-col items-center gap-1 select-none z-10"
            >
              <div className="bg-brand-purple-light p-2 rounded-xl text-brand-purple-dark">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-brand-dark/70">Calidad Premium</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
