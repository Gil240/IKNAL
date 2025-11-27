import { Search, Truck, Tag, Heart, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Búsqueda rápida y sencilla',
      subtitle: 'Encuentra lo que necesitas sin complicarte.',
      description: 'Explora productos disponibles en negocios locales y socios revendedores con solo unos clics. Nuestra plataforma identifica rápidamente quién lo tiene y te muestra opciones inmediatas cerca de ti.',
      gradient: 'from-[#1BC8C0] to-[#16938E]',
      iconBg: 'bg-[#1BC8C0]/10',
      iconColor: 'text-[#1BC8C0]',
    },
    {
      icon: Truck,
      title: 'Entrega confiable',
      subtitle: 'Tu pedido, siempre en buenas manos.',
      description: 'Repartidores verificados recolectan tu compra directamente del socio local y la llevan a tu puerta. Cada entrega es rastreable y supervisada para garantizar seguridad y puntualidad.',
      gradient: 'from-[#6C4DFF] to-[#8B73FE]',
      iconBg: 'bg-[#6C4DFF]/10',
      iconColor: 'text-[#6C4DFF]',
    },
    {
      icon: Tag,
      title: 'Precios accesibles',
      subtitle: 'Calidad local sin pagar de más.',
      description: 'Al eliminar intermediarios tradicionales, conectamos directamente a clientes con socios locales, permitiendo obtener mejores precios y opciones más cercanas sin costos ocultos.',
      gradient: 'from-[#16938E] to-[#125E5C]',
      iconBg: 'bg-[#16938E]/10',
      iconColor: 'text-[#16938E]',
    },
    {
      icon: Heart,
      title: 'Impacto social',
      subtitle: 'Tu compra fortalece la economía de tu comunidad.',
      description: 'Cada pedido activa un ciclo económico positivo: genera ingresos para microempresas locales, crea oportunidades para repartidores y fomenta el crecimiento del comercio de barrio.',
      gradient: 'from-[#8B73FE] to-[#615DF7]',
      iconBg: 'bg-[#8B73FE]/10',
      iconColor: 'text-[#8B73FE]',
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-24 md:py-32 bg-[#E9EFF1]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-[#BAE8E7]/30 text-[#125E5C] text-sm font-semibold rounded-full mb-6">
            Nuestras Ventajas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C3130] tracking-tight">
            ¿Por qué los clientes nos eligen?
          </h2>
          <p className="mt-5 text-lg md:text-xl text-[#0C3130]/60 max-w-2xl mx-auto">
            Mira cómo transformamos tu forma de comprar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 md:p-10 border border-[#E9EFF1] hover:border-[#BAE8E7] transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(12,49,48,0.12)]"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-[#0C3130] mb-2">
                  {feature.title}
                </h3>
                <p className={`font-medium mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.subtitle}
                </p>
                <p className="text-[#0C3130]/60 text-[15px] leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Image Placeholder */}
                <div className="mt-8 bg-gradient-to-br from-[#E9EFF1]/50 to-[#BAE8E7]/20 rounded-2xl p-6 flex items-center justify-center min-h-[140px] border border-dashed border-[#BAE8E7]/50">
                  <div className="text-center">
                    <Smartphone className="w-10 h-10 text-[#16938E]/40 mx-auto mb-3" />
                    <p className="text-[#0C3130]/40 text-sm font-medium">Agregar captura aquí</p>
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
