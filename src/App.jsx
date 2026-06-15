import { lazy, Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './data/constants';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Reels from './components/Reels';
import Footer from './components/Footer';

const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));

const LoadingFallback = () => (
  <div className="w-full py-20 flex justify-center items-center" aria-hidden="true">
    <div className="w-8 h-8 border-4 border-brand-pink-light border-t-brand-pink-dark rounded-full animate-spin" />
  </div>
);

function App() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream relative">
      <Header />
      
      <main>
        <Hero />
        <About />
        
        <Suspense fallback={<LoadingFallback />}>
          <Gallery />
        </Suspense>
        
        <Reels />
        
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>
      </main>
      
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
      
      <Footer />
    </div>
  );
}

export default App;
