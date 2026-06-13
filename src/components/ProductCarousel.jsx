import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const ProductCarousel = ({ images, categoryTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  if (images.length === 1) {
    return (
      <div className="relative overflow-hidden rounded-3xl shadow-premium bg-white border border-brand-pink/20 aspect-square group">
        <img 
          src={images[0]} 
          alt={categoryTitle} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 product-image-filter"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-pink-dark border border-brand-pink/30 flex items-center gap-1 shadow-sm">
          <Heart className="w-3.5 h-3.5 fill-brand-pink-dark" /> Hecho a Mano
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div 
        className="relative overflow-hidden rounded-3xl shadow-premium bg-white border border-brand-pink/20 aspect-square group cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${categoryTitle} - Imagen ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full object-cover product-image-filter"
          />
        </AnimatePresence>

        {/* Floating details badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-pink-dark border border-brand-pink/30 flex items-center gap-1 shadow-sm select-none">
          <Sparkles className="w-3.5 h-3.5 fill-brand-pink-dark" /> Premium
        </div>

        {/* Carousel indicator count */}
        <div className="absolute bottom-4 right-4 bg-brand-dark/70 text-white backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark hover:text-brand-pink-dark w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-brand-pink/30 hover:scale-105 transition-all z-10"
        aria-label="Imagen Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark hover:text-brand-pink-dark w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-brand-pink/30 hover:scale-105 transition-all z-10"
        aria-label="Siguiente Imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-brand-pink-dark' : 'w-2.5 bg-brand-pink/40'}`}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
