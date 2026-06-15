import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const getModelName = (path) => {
  if (!path) return '';
  const filename = path.split('/').pop();
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  const cleanName = nameWithoutExt.replace(/[-_]/g, ' ');
  return cleanName
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const isVideo = (path) => {
  return typeof path === 'string' && path.toLowerCase().endsWith('.mp4');
};

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
    const isVid = isVideo(images[0]);
    return (
      <div className="relative overflow-hidden rounded-3xl shadow-premium bg-white border border-brand-pink/20 aspect-square group">
        {isVid ? (
          <video 
            src={images[0]} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 product-image-filter"
          />
        ) : (
          <img 
            src={images[0]} 
            alt={categoryTitle} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 product-image-filter"
          />
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-pink-dark border border-brand-pink/30 flex items-center gap-1 shadow-sm">
          <Heart className="w-3.5 h-3.5 fill-brand-pink-dark" /> Hecho a Mano
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-pink-dark border border-brand-pink/30 flex items-center gap-1 shadow-sm select-none">
          Modelo: {getModelName(images[0])}
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
          {isVideo(images[currentIndex]) ? (
            <motion.video
              key={currentIndex}
              src={images[currentIndex]}
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full object-cover product-image-filter"
            />
          ) : (
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${categoryTitle} - Imagen ${currentIndex + 1}`}
              loading="lazy"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full object-cover product-image-filter"
            />
          )}
        </AnimatePresence>

        {/* Floating details badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-pink-dark border border-brand-pink/30 flex items-center gap-1 shadow-sm select-none">
          <Sparkles className="w-3.5 h-3.5 fill-brand-pink-dark" /> Premium
        </div>

        {/* Model Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-pink-dark border border-brand-pink/30 flex items-center gap-1 shadow-sm select-none">
          Modelo: {getModelName(images[currentIndex])}
        </div>

        {/* Carousel indicator count */}
        <div className="absolute bottom-4 right-4 bg-brand-dark/70 text-white backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark hover:text-brand-pink-dark w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-brand-pink/30 hover:scale-105 transition-all z-10"
        aria-label="Imagen Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark hover:text-brand-pink-dark w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-brand-pink/30 hover:scale-105 transition-all z-10"
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
            className={`relative h-2.5 rounded-full transition-all duration-300 before:absolute before:inset-[-12px] before:content-[''] ${currentIndex === idx ? 'w-6 bg-brand-pink-dark' : 'w-2.5 bg-brand-pink/40'}`}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
