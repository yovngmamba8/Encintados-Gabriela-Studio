import { useEffect } from 'react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';

const Reels = () => {
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

  return (
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
  );
};

export default Reels;
