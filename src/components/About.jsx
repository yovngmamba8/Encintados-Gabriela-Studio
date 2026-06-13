import { Heart, CheckCircle } from 'lucide-react';

const About = () => {
  return (
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
  );
};

export default About;
