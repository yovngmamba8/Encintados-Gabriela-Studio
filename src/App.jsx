import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Instagram, 
  MessageCircle, 
  ShoppingBag, 
  Award, 
  Info,
  ExternalLink,
  Star,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

// Product categories configuration
const CATEGORIES = [
  {
    id: 'chapitas',
    title: 'Chapitas Espejo',
    subtitle: 'Recuerdos perfectos para celebraciones',
    description: 'Nuestras chapitas espejo personalizadas son el recuerdo ideal para bautizos, cumpleaños, baby showers y matrimonios. Delicadas, útiles y diseñadas con la temática de tu evento.',
    images: ['images/Chapitas.jpeg'],
    priceTable: [
      { qty: '1 Unidad', price: '$800', unit: '$800 c/u', tag: 'Detalle' },
      { qty: 'Docena (12 uds)', price: '$8.400', unit: '$700 c/u', tag: 'Recomendado' },
      { qty: '25 Unidades', price: '$16.250', unit: '$650 c/u', tag: 'Económico' },
      { qty: '50 Unidades', price: '$30.000', unit: '$600 c/u', tag: 'Favorito' },
      { qty: '100 Unidades', price: '$55.000', unit: '$550 c/u', tag: 'Mejor Valor' }
    ]
  },
  {
    id: 'sets-regalos',
    title: 'Sets de Regalo y Cajas',
    subtitle: 'Regalos armados con tote bags, tazas, chocolates y más',
    description: 'Sorprende a esa persona especial con una caja de regalo premium. Cada set incluye productos personalizados combinados armónicamente, decorados con cintas de raso y tarjetas dedicatorias especiales.',
    images: ['/images/cajas_1.png', '/images/cajas_2.png', '/images/Set de regalo.jpeg'],
  },
  {
    id: 'cintas',
    title: 'Cintas Personalizadas',
    subtitle: 'Especiales para instrumentos y eventos',
    description: 'Cintas de raso impresas con nombres, fechas o dedicatorias especiales. Ideales para envolver regalos premium, marcar instrumentos musicales, medallas o eventos corporativos con un toque de elegancia.',
    images: ['/images/cintas_1.png', '/images/cintas_2.png'],
  },
  {
    id: 'tazas',
    title: 'Tazas y Recipientes',
    subtitle: 'Diseños exclusivos en sublimación y vinilo',
    description: 'Tazas de cerámica y recipientes de vidrio personalizados. Hechos con sublimación de alta definición y vinilo permanente premium. Perfectas para el café de la mañana o como un regalo corporativo de gran presencia.',
    images: ['/images/tazas_1.png', '/images/Tazas.jpeg'],
  },
  {
    id: 'flores',
    title: 'Flores Eternas',
    subtitle: 'Hermosos ramos de rosas de jabón',
    description: 'Hermosas y aromáticas rosas de jabón presentadas en ramos premium. Un detalle que dura para siempre, no se marchita y perfuma el ambiente de forma dulce y duradera.',
    images: ['/images/flores_1.png', '/images/Ramo.jpeg'],
  },
  {
    id: 'mundo-ideas',
    title: 'Un mundo de ideas',
    subtitle: 'Detalles solitarios que complementan cualquier regalo',
    description: 'Pequeños grandes detalles diseñados para complementar tus regalos o regalar por sí solos. Llaveros personalizados, lápices decorados, imanes temáticos y marca páginas hermosos que añaden un toque único.',
    images: [
      '/images/Lapiz.jpeg',
      '/images/Llavero.jpeg',
      '/images/Llavero1.jpeg',
      '/images/Llavero2.jpeg',
      '/images/Iman.jpeg',
      '/images/Imanes.jpeg',
      '/images/Marca Páginas.jpeg',
      '/images/Recuerdos.jpeg'
    ]
  }
];

// Carousel Component
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

// Hero portfolio slides configuration
const HERO_SLIDES = [
  {
    image: '/images/cajas_2.png',
    title: 'Sets Temáticos',
    subtitle: 'Sublimación y Cintas premium'
  },
  {
    image: '/images/cajas_1.png',
    title: 'Cajas de Regalo',
    subtitle: 'Detalles hechos con amor'
  },
  {
    image: '/images/Chapitas.jpeg',
    title: 'Chapitas Espejo',
    subtitle: 'Recuerdos personalizados'
  },
  {
    image: '/images/Tazas.jpeg',
    title: 'Tazas de Diseño',
    subtitle: 'Sublimación de alta definición'
  },
  {
    image: '/images/Ramo.jpeg',
    title: 'Flores Eternas',
    subtitle: 'Ramos que duran siempre'
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);

  // Hero Carousel State & Auto Cycle
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Load Instagram embed script and process blockquotes
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  // Testimonials State
  const [reviews, setReviews] = useState([]);

  // Form State
  const [newName, setNewName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [ratingHover, setRatingHover] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newLastName.trim() || !newComment.trim() || newRating === 0) {
      alert('Por favor, completa todos los campos y califica con estrellas.');
      return;
    }

    const newReview = {
      id: Date.now(),
      name: newName.trim(),
      lastName: newLastName.trim(),
      rating: newRating,
      comment: newComment.trim()
    };

    setReviews([newReview, ...reviews]);
    setNewName('');
    setNewLastName('');
    setNewRating(5);
    setNewComment('');
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
      if (window.instgrm) window.instgrm.Embeds.process();
    }, 4000);
  };

  // WhatsApp configuration
  const whatsappNumber = '56995749220'; // Standard mock number for Gabriela Studio
  const getWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream relative">
      
      {/* 1. Header / Navbar */}
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

      {/* 2. Hero Section */}
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

      {/* 3. Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-20 px-6 bg-white border-y border-brand-pink/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-brand-pink/20">
              <img 
                src="/images/nosotros.png" 
                alt="Detalles Personalizados y Cajas de Regalo" 
                className="w-full h-full object-cover product-image-filter"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-pink/90">Gabriela Studio</span>
                <h3 className="font-display text-xl font-bold mt-2 text-brand-pink/90">Regalos que cuentan historias</h3>
              </div>
            </div>
            {/* Soft decorative blur */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-brand-purple-light/50 rounded-full blur-2xl -z-10" />
          </div>

          {/* Text Column */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <div className="flex items-center gap-2 text-brand-pink-dark">
              <Heart className="w-5 h-5 fill-brand-pink-dark" />
              <span className="font-semibold text-sm tracking-wide uppercase">Sobre Nosotros</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4.5xl font-bold text-brand-dark leading-tight">
              Detalles que emocionan
            </h2>

            <p className="text-brand-dark/80 text-base md:text-lg leading-relaxed">
              Somos una pareja dedicada a crear regalos personalizados y detalles a medida para cumpleaños, baby showers, bautizos, bodas y toda ocasión especial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3 bg-brand-cream p-4 rounded-2xl border border-brand-pink/20">
                <CheckCircle className="w-5 h-5 text-brand-pink-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">Eventos y Celebraciones</h4>
                  <p className="text-xs text-brand-dark/65 mt-0.5">Recuerdos hermosos listos para regalar en tus fechas más importantes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-brand-cream p-4 rounded-2xl border border-brand-pink/20">
                <CheckCircle className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">Peticiones Especiales</h4>
                  <p className="text-xs text-brand-dark/65 mt-0.5">Sublimación de tazas y cintas hechas con las frases y colores que tú elijas.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Product Gallery (Carruseles por Categoría) */}
      <section id="galeria" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-brand-purple-light border border-brand-purple/30 px-4 py-1 rounded-full text-brand-purple-dark font-semibold text-xs md:text-sm shadow-sm uppercase">
            <span>Catálogo Exclusivo</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark">
            Nuestras Categorías de Productos
          </h2>
          <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed">
            Descubre nuestra variedad de detalles artesanales y personalizados. Cada categoría está confeccionada individualmente con amor y los mejores materiales.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="flex flex-col gap-24">
          {CATEGORIES.map((cat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={cat.id} 
                id={cat.id} 
                className="grid md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Carousel container (Column 1) */}
                <div className={`md:col-span-5 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <ProductCarousel images={cat.images} categoryTitle={cat.title} />
                </div>

                {/* Content Container (Column 2) */}
                <div className={`md:col-span-7 flex flex-col gap-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div>
                    <span className="text-xs font-bold text-brand-pink-dark uppercase tracking-widest bg-brand-pink-light px-3 py-1 rounded-md border border-brand-pink/20">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-display text-2xl md:text-3.5xl font-bold text-brand-dark mt-3">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-brand-dark/80 text-sm md:text-base leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Specific pricing component for Chapitas Espejo */}
                  {cat.priceTable && (
                    <div className="bg-brand-pink-light/50 border border-brand-pink/30 rounded-3xl p-5 md:p-6 shadow-soft">
                      <div className="flex items-center gap-2 mb-4">
                        <Info className="w-5 h-5 text-brand-pink-dark" />
                        <h4 className="font-bold text-sm text-brand-dark uppercase tracking-wider">
                          Valores al por Mayor (Chapitas Espejo)
                        </h4>
                      </div>
                      
                      {/* Pricing cards grid instead of boring table */}
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                        {cat.priceTable.map((p, i) => (
                          <div 
                            key={i} 
                            className={`flex flex-col justify-between items-center text-center p-3 rounded-2xl border transition-all duration-300 ${i === 1 ? 'bg-white border-brand-pink-dark shadow-sm scale-102' : 'bg-white/60 border-brand-pink/20 hover:bg-white'}`}
                          >
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full select-none ${i === 1 ? 'bg-brand-pink-dark text-white' : 'bg-brand-pink/15 text-brand-pink-dark'}`}>
                              {p.tag}
                            </span>
                            <span className="text-[10px] font-semibold text-brand-dark/60 mt-2">{p.qty}</span>
                            <span className="font-display font-bold text-base text-brand-dark mt-1">{p.price}</span>
                            <span className="text-[9px] font-medium text-brand-dark/50 mt-0.5">{p.unit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action button */}
                  <div>
                    <a 
                      href={getWhatsAppLink(`Hola! Me interesa cotizar de la categoría: ${cat.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-brand-pink-light text-brand-dark border border-brand-pink/50 hover:border-brand-pink px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-brand-pink-dark fill-brand-pink-dark/20" />
                      <span>Cotizar {cat.title} por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Instagram Reels Section (Nuestro Trabajo en Acción) */}
      <section id="videos" className="py-20 px-6 bg-brand-pink-light/40 border-y border-brand-pink/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-brand-pink border border-brand-pink-dark/30 px-4 py-1 rounded-full text-brand-dark font-semibold text-xs md:text-sm shadow-sm uppercase">
              <Instagram className="w-3.5 h-3.5" />
              <span>Trabajo en Acción</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark">
              Conoce los Detalles
            </h2>
            <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed">
              Descubre el amor, paciencia y técnica detrás de cada uno de nuestros pedidos. Síguenos en Instagram para ver más de nuestro taller.
            </p>
          </div>

          {/* Reels Native Embed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Reel 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-brand-pink/20 shadow-premium flex flex-col min-h-[500px]">
              <div className="p-4 border-b border-brand-pink/10 flex items-center justify-between bg-white select-none">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-pink-purple p-1.5 rounded-full text-white">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                  </div>
                  <span className="font-bold text-xs text-brand-dark">Proceso Creativo</span>
                </div>
                <span className="text-[10px] text-brand-pink-dark font-bold">@encintadosgabriela_studio</span>
              </div>
              <div className="p-3 bg-brand-cream/25 flex justify-center items-start overflow-y-auto max-h-[600px]">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DY0vr-OAR2t/" 
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: '0', borderRadius: '16px', margin: '0', padding: '0', width: '100%', maxWidth: '320px' }}
                >
                  <a href="https://www.instagram.com/reel/DY0vr-OAR2t/" target="_blank" rel="noopener noreferrer">
                    Ver video en Instagram
                  </a>
                </blockquote>
              </div>
            </div>

            {/* Reel 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-brand-pink/20 shadow-premium flex flex-col min-h-[500px]">
              <div className="p-4 border-b border-brand-pink/10 flex items-center justify-between bg-white select-none">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-pink-purple p-1.5 rounded-full text-white">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                  </div>
                  <span className="font-bold text-xs text-brand-dark">Empaque y Cuidado</span>
                </div>
                <span className="text-[10px] text-brand-pink-dark font-bold">@encintadosgabriela_studio</span>
              </div>
              <div className="p-3 bg-brand-cream/25 flex justify-center items-start overflow-y-auto max-h-[600px]">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DYuZCO7gImW/" 
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: '0', borderRadius: '16px', margin: '0', padding: '0', width: '100%', maxWidth: '320px' }}
                >
                  <a href="https://www.instagram.com/reel/DYuZCO7gImW/" target="_blank" rel="noopener noreferrer">
                    Ver video en Instagram
                  </a>
                </blockquote>
              </div>
            </div>

            {/* Reel 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-brand-pink/20 shadow-premium flex flex-col min-h-[500px]">
              <div className="p-4 border-b border-brand-pink/10 flex items-center justify-between bg-white select-none">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-pink-purple p-1.5 rounded-full text-white">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                  </div>
                  <span className="font-bold text-xs text-brand-dark">Resultado Final</span>
                </div>
                <span className="text-[10px] text-brand-pink-dark font-bold">@encintadosgabriela_studio</span>
              </div>
              <div className="p-3 bg-brand-cream/25 flex justify-center items-start overflow-y-auto max-h-[600px]">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DYqypQjgk1_/" 
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: '0', borderRadius: '16px', margin: '0', padding: '0', width: '100%', maxWidth: '320px' }}
                >
                  <a href="https://www.instagram.com/reel/DYqypQjgk1_/" target="_blank" rel="noopener noreferrer">
                    Ver video en Instagram
                  </a>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Reel section Instagram call to action */}
          <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/encintadosgabriela_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-pink-dark hover:text-brand-purple-dark font-bold text-sm transition-colors group"
            >
              <span>Ver más contenido en nuestro Instagram</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 6. WhatsApp Business CTA and Footer */}
      
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

      {/* 5.5. Testimonios Section */}
      <section id="testimonios" className="py-20 px-6 max-w-7xl mx-auto border-t border-brand-pink/15">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-brand-pink-light border border-brand-pink/30 px-4 py-1 rounded-full text-brand-pink-dark font-semibold text-xs md:text-sm shadow-sm uppercase">
            <Heart className="w-3.5 h-3.5 fill-brand-pink-dark" />
            <span>Lo que dicen nuestros clientes</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark">
            Detalles que Dejan Huella
          </h2>
          <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed">
            Las experiencias de quienes ya han confiado en nuestro taller para sus momentos más especiales.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mb-16">
          {reviews.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 px-6 bg-white/45 border border-brand-pink/20 rounded-3xl max-w-xl mx-auto shadow-sm"
            >
              <div className="inline-flex p-3 bg-brand-pink-light rounded-full text-brand-pink-dark mb-4">
                <Heart className="w-6 h-6 fill-brand-pink-dark/20" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-dark mb-2">Aún no hay testimonios</h4>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                ¡Sé la primera persona en compartir tu experiencia con nosotros! Completa el formulario de abajo para publicar tu reseña.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {reviews.map((rev) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl p-6 border border-brand-pink/20 shadow-premium flex flex-col justify-between"
                  >
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < rev.rating ? 'text-brand-gold fill-brand-gold' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-brand-dark/80 text-sm md:text-base italic leading-relaxed mb-6">
                        "{rev.comment}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 border-t border-brand-pink/10 pt-4">
                      {/* Initials Avatar */}
                      <div className="w-10 h-10 rounded-full bg-brand-pink-light text-brand-pink-dark font-bold text-sm flex items-center justify-center border border-brand-pink/20 select-none uppercase">
                        {rev.name[0]}{rev.lastName[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-brand-dark">{rev.name} {rev.lastName}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Leave a Review Form */}
        <div className="bg-white/70 border border-brand-pink/30 rounded-3xl p-6 md:p-10 shadow-soft max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-brand-dark">Comparte tu Experiencia</h3>
            <p className="text-xs md:text-sm text-brand-dark/65 mt-1">Tu opinión nos ayuda a seguir creando con el corazón.</p>
          </div>

          <form onSubmit={handleReviewSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="text-xs font-bold text-brand-dark/70 uppercase tracking-wider">Nombre</label>
                <input 
                  type="text" 
                  id="nombre"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  className="bg-white border border-brand-pink/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink/30 transition-all text-brand-dark font-medium"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="apellido" className="text-xs font-bold text-brand-dark/70 uppercase tracking-wider">Apellido</label>
                <input 
                  type="text" 
                  id="apellido"
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                  placeholder="Tu apellido"
                  required
                  className="bg-white border border-brand-pink/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink/30 transition-all text-brand-dark font-medium"
                />
              </div>
            </div>

            {/* Clickable Rating Stars */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-brand-dark/70 uppercase tracking-wider">Calificación</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    onMouseEnter={() => setRatingHover(star)}
                    onMouseLeave={() => setRatingHover(0)}
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                    aria-label={`Calificar con ${star} estrellas`}
                  >
                    <Star 
                      className={`w-8 h-8 ${star <= (ratingHover || newRating) ? 'text-brand-gold fill-brand-gold' : 'text-gray-200'}`} 
                    />
                  </button>
                ))}
                <span className="text-xs font-semibold text-brand-dark/60 ml-2 select-none">
                  {newRating} {newRating === 1 ? 'estrella' : 'estrellas'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="comentario" className="text-xs font-bold text-brand-dark/70 uppercase tracking-wider">Comentario</label>
              <textarea 
                id="comentario"
                rows="4"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Escribe aquí tu testimonio sobre tu pedido..."
                required
                className="bg-white border border-brand-pink/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink/30 transition-all resize-none text-brand-dark font-medium"
              />
            </div>

            <button
              type="submit"
              className="bg-brand-pink-dark hover:bg-brand-pink-dark/95 text-white py-3 px-8 rounded-full font-bold text-sm shadow-soft hover:shadow-lg transition-all self-center sm:self-start active:scale-98"
            >
              Publicar Reseña
            </button>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 text-xs px-4 py-2.5 rounded-xl font-semibold flex items-center gap-1.5"
                >
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>¡Tu reseña ha sido publicada con éxito y agregada arriba!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>

      {/* Footer Block */}
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
            <div className="flex justify-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-brand-pink-dark transition-colors">Inicio</a>
              <a href="#sobre-nosotros" className="hover:text-brand-pink-dark transition-colors">Nosotros</a>
              <a href="#galeria" className="hover:text-brand-pink-dark transition-colors">Catálogo</a>
              <a href="#videos" className="hover:text-brand-pink-dark transition-colors">Proceso</a>
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

    </div>
  );
}

export default App;
