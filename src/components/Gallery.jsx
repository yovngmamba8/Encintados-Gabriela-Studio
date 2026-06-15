import { Info, MessageCircle } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import { CATEGORIES, getWhatsAppLink } from '../data/constants';

const Gallery = () => {
  return (
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
                        Valores y Modelos ({cat.title})
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

                    {cat.priceNote && (
                      <p className="text-xs italic text-brand-dark/60 mt-4 text-left">
                        {cat.priceNote}
                      </p>
                    )}
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
  );
};

export default Gallery;
