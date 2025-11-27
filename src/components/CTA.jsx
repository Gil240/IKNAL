import { Smartphone, ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section id="unete" className="py-24 md:py-32 bg-gradient-to-br from-[#0C3130] via-[#125E5C] to-[#0C3130] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1BC8C0]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6C4DFF]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#1BC8C0]/5 to-[#6C4DFF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-8">
              <Zap className="w-4 h-4 text-[#1BC8C0]" />
              <span className="text-sm font-medium text-white/80">Comienza hoy, gratis</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Empieza ahora y haz que tu ciudad{' '}
              <span className="bg-gradient-to-r from-[#1BC8C0] to-[#3CCFC8] bg-clip-text text-transparent">
                se mueva contigo
              </span>
            </h2>
            
            <p className="mt-7 text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Únete a la comunidad que está transformando la forma de comprar y apoyar negocios locales.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#0C3130] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.3)] hover:-translate-y-1 group"
              >
                Únete Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent text-white px-10 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Descarga la App
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1BC8C0]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#1BC8C0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Sin compromisos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1BC8C0]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#1BC8C0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Sin tarjeta de crédito</span>
              </div>
            </div>
          </div>

          {/* App Screenshot Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-4 border border-white/10">
                <div className="bg-gradient-to-br from-white to-[#E9EFF1] rounded-[1.5rem] p-6 shadow-2xl">
                  <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[380px] bg-gradient-to-br from-[#E7E2FF]/30 to-[#BAE8E7]/30 rounded-2xl border border-dashed border-[#6C4DFF]/30">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6C4DFF] to-[#8B73FE] rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-[#6C4DFF] font-semibold text-center">
                      Agregar captura de app aquí
                    </p>
                    <p className="text-[#0C3130]/40 text-sm mt-2 text-center">
                      Mockup de la aplicación
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#6C4DFF] to-[#8B73FE] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(108,77,255,0.5)]">
                ¡Es gratis! 🎉
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
