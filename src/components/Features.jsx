import { Search, Truck, Tag, Heart, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Búsqueda rápida y sencilla',
      subtitle: 'Encuentra lo que necesitas sin complicarte.',
      description: 'Explora productos disponibles en negocios locales y socios revendedores con solo unos clics. Nuestra plataforma identifica rápidamente quién lo tiene y te muestra opciones inmediatas cerca de ti.',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      icon: Truck,
      title: 'Entrega confiable',
      subtitle: 'Tu pedido, siempre en buenas manos.',
      description: 'Repartidores verificados recolectan tu compra directamente del socio local y la llevan a tu puerta. Cada entrega es rastreable y supervisada para garantizar seguridad y puntualidad.',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      icon: Tag,
      title: 'Precios accesibles',
      subtitle: 'Calidad local sin pagar de más.',
      description: 'Al eliminar intermediarios tradicionales, conectamos directamente a clientes con socios locales, permitiendo obtener mejores precios y opciones más cercanas sin costos ocultos.',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      icon: Heart,
      title: 'Impacto social',
      subtitle: 'Tu compra fortalece la economía de tu comunidad.',
      description: 'Cada pedido activa un ciclo económico positivo: genera ingresos para microempresas locales, crea oportunidades para repartidores y fomenta el crecimiento del comercio de barrio.',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900">
            ¿Por qué los clientes nos eligen?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
            Mira cómo transformamos tu forma de comprar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.gridClass} group bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10`}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {feature.subtitle}
                </p>
                <p className="text-secondary-600 text-sm md:text-base flex-grow">
                  {feature.description}
                </p>

                {/* Image Placeholder */}
                <div className="mt-6 bg-white rounded-xl border-2 border-dashed border-gray-200 p-4 flex items-center justify-center min-h-[120px]">
                  <div className="text-center">
                    <Smartphone className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Agregar captura aquí</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
