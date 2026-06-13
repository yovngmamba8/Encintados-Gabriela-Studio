import { useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './data/constants';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Reels from './components/Reels';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream relative">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Reels />
      
      {/* Floating WhatsApp Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 select-none"
      >
        <a 
          href={getWhatsAppLink('Hola! Vi tu página web y me gustaría cotizar recuerdos personalizados.')}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group"
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulsing ring animation */}
          <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10 scale-105" />
          
          <MessageCircle className="w-7 h-7 fill-white" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-white border border-brand-pink/20 text-brand-dark font-bold text-xs px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none">
            ¿Cómo te ayudamos hoy? 🎀
          </span>
        </a>
      </motion.div>

      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
