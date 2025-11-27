import { Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
              Tu compra movida por la{' '}
              <span className="text-primary-600">comunidad</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto lg:mx-0">
              Impulsa la economía local conectando clientes, microempresas y repartidores en un solo lugar. Pide lo que necesitas y deja que la comunidad se mueva por ti.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#unete"
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                Únete Gratis
              </a>
            </div>
            <p className="mt-4 text-sm text-secondary-500 flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sin tarjeta de crédito requerida
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary-500/10">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] border-2 border-dashed border-primary-300 rounded-xl">
                  <Smartphone className="w-16 h-16 text-primary-400 mb-4" />
                  <p className="text-primary-600 font-medium text-center">
                    Agregar captura de app aquí
                  </p>
                  <p className="text-secondary-400 text-sm mt-2 text-center px-4">
                    Mockup de la aplicación móvil
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
