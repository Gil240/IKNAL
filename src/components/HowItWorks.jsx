import { Users, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const blocks = [
    {
      icon: Users,
      title: 'Así funciona nuestra red colaborativa',
      description: 'Un sistema donde clientes, socios locales y repartidores trabajan juntos para mover cualquier producto hasta tu puerta.',
      buttonText: 'Descubre Cómo',
      bgClass: 'from-primary-600 to-primary-700',
    },
    {
      icon: TrendingUp,
      title: 'Únete al ecosistema que impulsa la economía local',
      description: 'Ayuda a mover productos, apoyar negocios y generar ingresos mientras haces lo que te gusta.',
      buttonText: 'Descubre Más',
      bgClass: 'from-secondary-700 to-secondary-800',
    },
  ];

  return (
    <section id="se-socio" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${block.bgClass} rounded-3xl p-8 md:p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <block.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {block.title}
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-md">
                  {block.description}
                </p>

                {/* Button */}
                <button className="bg-white text-secondary-900 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-200 hover:shadow-lg">
                  {block.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
