import { Smartphone, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="unete" className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Empieza ahora y haz que tu ciudad se mueva contigo
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
              Únete a la comunidad que está transformando la forma de comprar y apoyar negocios locales.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 hover:gap-3 group"
              >
                Únete Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Sin compromisos • Sin tarjeta de crédito
            </p>
          </div>

          {/* App Screenshot Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col items-center justify-center min-h-[280px] md:min-h-[350px] border-2 border-dashed border-primary-200 rounded-xl">
                  <Smartphone className="w-14 h-14 text-primary-300 mb-4" />
                  <p className="text-primary-500 font-medium text-center">
                    Agregar captura de app aquí
                  </p>
                  <p className="text-secondary-400 text-sm mt-2 text-center px-4">
                    Mockup de la aplicación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
