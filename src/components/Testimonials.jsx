import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [newName, setNewName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [ratingHover, setRatingHover] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch approved testimonials from Supabase on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .eq('is_approved', true)
          .order('created_at', { ascending: false });
        if (error) throw error;
        setReviews(data || []);
      } catch (err) {
        console.error('Error fetching reviews:', err.message);
      }
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!newName.trim() || !newLastName.trim() || !newComment.trim() || newRating === 0) {
      alert('Por favor, completa todos los campos y califica con estrellas.');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            first_name: newName.trim(),
            last_name: newLastName.trim(),
            rating: newRating,
            comment: newComment.trim()
          }
        ])
        .select();

      if (error) throw error;

      // Update local state instantly for UI feedback
      const insertedReview = data && data[0] ? data[0] : {
        id: Date.now(),
        first_name: newName.trim(),
        last_name: newLastName.trim(),
        rating: newRating,
        comment: newComment.trim()
      };

      setReviews([insertedReview, ...reviews]);
      setCurrentIndex(0); // Go to the new review
      setNewName('');
      setNewLastName('');
      setNewRating(5);
      setNewComment('');
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    } catch (err) {
      console.error('Error submitting review:', err.message);
      alert('Hubo un problema al enviar tu reseña. Por favor, intenta de nuevo.');
    }
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
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

      {/* Reviews Carousel */}
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
            <h3 className="font-display font-bold text-lg text-brand-dark mb-2">Aún no hay testimonios</h3>
            <p className="text-sm text-brand-dark/70 leading-relaxed">
              ¡Sé la primera persona en compartir tu experiencia con nosotros! Completa el formulario de abajo para publicar tu reseña.
            </p>
          </motion.div>
        ) : (
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden px-4 md:px-12 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="bg-white rounded-3xl p-8 border border-brand-pink/20 shadow-premium flex flex-col items-center text-center mx-auto w-full"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < reviews[currentIndex].rating ? 'text-brand-gold fill-brand-gold' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-brand-dark/80 text-base md:text-xl italic leading-relaxed mb-8 max-w-2xl">
                    "{reviews[currentIndex].comment}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    {/* Initials Avatar */}
                    <div className="w-12 h-12 rounded-full bg-brand-pink-light text-brand-pink-dark font-bold text-base flex items-center justify-center border border-brand-pink/20 select-none uppercase">
                      {reviews[currentIndex].first_name ? reviews[currentIndex].first_name[0] : ''}
                      {reviews[currentIndex].last_name ? reviews[currentIndex].last_name[0] : ''}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-brand-dark">{reviews[currentIndex].first_name} {reviews[currentIndex].last_name}</h3>
                      <p className="text-xs text-brand-dark/60">Cliente Verificado</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {reviews.length > 1 && (
              <>
                <button 
                  onClick={prevReview}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-6 bg-white hover:bg-brand-pink-light text-brand-dark hover:text-brand-pink-dark w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-brand-pink/30 hover:scale-105 transition-all z-10"
                  aria-label="Reseña Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-6 bg-white hover:bg-brand-pink-light text-brand-dark hover:text-brand-pink-dark w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-brand-pink/30 hover:scale-105 transition-all z-10"
                  aria-label="Siguiente Reseña"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Pagination Dots */}
            {reviews.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-brand-pink-dark' : 'w-2.5 bg-brand-pink/40 hover:bg-brand-pink'}`}
                    aria-label={`Ir a la reseña ${idx + 1}`}
                  />
                ))}
              </div>
            )}
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
  );
};

export default Testimonials;
