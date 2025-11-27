import { Smartphone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-28 md:pt-36 pb-20 md:pb-32 bg-gradient-to-b from-white via-[#BAE8E7]/10 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E7E2FF]/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#BAE8E7]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E7E2FF]/50 border border-[#8B73FE]/20 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#6C4DFF]" />
              <span className="text-sm font-medium text-[#6C4DFF]">La nueva forma de comprar local</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0C3130] leading-[1.1] tracking-tight">
              Tu compra movida por la{' '}
              <span className="bg-gradient-to-r from-[#1BC8C0] to-[#6C4DFF] bg-clip-text text-transparent">
                comunidad
              </span>
            </h1>
            
            <p className="mt-7 text-lg md:text-xl text-[#0C3130]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Impulsa la economía local conectando clientes, microempresas y repartidores en un solo lugar. Pide lo que necesitas y deja que la comunidad se mueva por ti.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#unete"
                className="w-full sm:w-auto bg-gradient-to-r from-[#6C4DFF] to-[#8B73FE] hover:from-[#5B3EE6] hover:to-[#7A62ED] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_8px_30px_-5px_rgba(108,77,255,0.5)] hover:shadow-[0_12px_40px_-5px_rgba(108,77,255,0.6)] hover:-translate-y-1"
              >
                Únete Gratis
              </a>
              <a
                href="#sobre-nosotros"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-lg text-[#0C3130] border-2 border-[#E9EFF1] hover:border-[#1BC8C0] hover:bg-[#BAE8E7]/20 transition-all duration-300"
              >
                Conoce más
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-[#0C3130]/60">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1BC8C0]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#1BC8C0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Sin tarjeta de crédito</span>
              </div>
              <span className="text-[#E9EFF1]">•</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1BC8C0]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#1BC8C0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Gratis para siempre</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-[2rem] p-3 shadow-[0_20px_80px_-20px_rgba(12,49,48,0.15)] border border-[#E9EFF1]">
                <div className="bg-gradient-to-br from-[#0C3130] to-[#125E5C] rounded-[1.5rem] p-8 md:p-10">
                  <div className="flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px]">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <Smartphone className="w-10 h-10 text-[#1BC8C0]" />
                    </div>
                    <p className="text-[#1BC8C0] font-semibold text-center text-lg">
                      Agregar captura de app aquí
                    </p>
                    <p className="text-white/50 text-sm mt-3 text-center">
                      Mockup de la aplicación móvil
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#6C4DFF] to-[#8B73FE] rounded-2xl flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(108,77,255,0.5)] rotate-12">
                <span className="text-white text-3xl">📦</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#1BC8C0] to-[#16938E] rounded-2xl flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(27,200,192,0.5)] -rotate-6">
                <span className="text-white text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
