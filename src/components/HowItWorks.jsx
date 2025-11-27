import { Users, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const blocks = [
    {
      icon: Users,
      title: 'Así funciona nuestra red colaborativa',
      description: 'Un sistema donde clientes, socios locales y repartidores trabajan juntos para mover cualquier producto hasta tu puerta.',
      buttonText: 'Descubre Cómo',
      gradient: 'from-[#0C3130] to-[#125E5C]',
      iconGradient: 'from-[#1BC8C0] to-[#3CCFC8]',
    },
    {
      icon: TrendingUp,
      title: 'Únete al ecosistema que impulsa la economía local',
      description: 'Ayuda a mover productos, apoyar negocios y generar ingresos mientras haces lo que te gusta.',
      buttonText: 'Descubre Más',
      gradient: 'from-[#6C4DFF] to-[#8B73FE]',
      iconGradient: 'from-[#E7E2FF] to-[#BAE8E7]',
    },
  ];

  return (
    <section id="se-socio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${block.gradient} rounded-[2rem] p-10 md:p-12 text-white relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(12,49,48,0.3)] hover:-translate-y-1`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${block.iconGradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <block.icon className="w-8 h-8 text-[#0C3130]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
                  {block.title}
                </h3>
                <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
                  {block.description}
                </p>

                {/* Button */}
                <button className="bg-white text-[#0C3130] px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 hover:gap-4 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] group/btn">
                  {block.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
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
