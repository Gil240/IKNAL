import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué es Iknal?',
      answer: 'Iknal es una plataforma móvil que conecta clientes, microempresas locales y repartidores para facilitar la compra y entrega de productos. Nuestro objetivo es impulsar la economía local y crear oportunidades para todos los participantes del ecosistema.',
    },
    {
      question: '¿Cómo puedo registrarme?',
      answer: 'Registrarte es muy sencillo. Solo descarga nuestra aplicación desde la tienda de tu dispositivo, completa el formulario con tus datos básicos y ¡listo! En minutos podrás empezar a explorar productos y realizar pedidos.',
    },
    {
      question: '¿Cuánto cuesta usar la plataforma?',
      answer: 'Crear tu cuenta y explorar la plataforma es completamente gratis. Solo pagas por los productos que compras más una pequeña tarifa de envío que va directamente al repartidor. Sin costos ocultos ni cargos por membresía.',
    },
    {
      question: '¿Cómo puedo ser repartidor?',
      answer: 'Si quieres generar ingresos como repartidor, descarga la app y selecciona la opción "Quiero ser repartidor". Completa el proceso de verificación que incluye documentos de identidad y antecedentes. Una vez aprobado, podrás aceptar entregas y empezar a ganar.',
    },
    {
      question: '¿Cómo puedo registrar mi negocio?',
      answer: 'Si tienes un negocio local, contáctanos a través del formulario de "Sé Socio". Nuestro equipo te ayudará a configurar tu catálogo de productos y te explicará cómo funciona el proceso para empezar a vender a través de Iknal.',
    },
    {
      question: '¿En qué ciudades está disponible?',
      answer: 'Actualmente estamos en fase de lanzamiento y trabajando para expandirnos. Únete a nuestra lista de espera para ser de los primeros en usar Iknal cuando lleguemos a tu ciudad. ¡La comunidad crece cada día!',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#E9EFF1]/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E7E2FF] rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-[#6C4DFF]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C3130] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-5 text-lg text-[#0C3130]/60">
            Encuentra respuestas a las preguntas más comunes
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#1BC8C0] shadow-[0_10px_40px_-15px_rgba(27,200,192,0.2)]' 
                  : 'border-[#E9EFF1] hover:border-[#BAE8E7]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`font-semibold text-lg pr-4 transition-colors duration-200 ${
                  openIndex === index ? 'text-[#125E5C]' : 'text-[#0C3130]'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#1BC8C0] rotate-180' 
                    : 'bg-[#E9EFF1] group-hover:bg-[#BAE8E7]'
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-[#0C3130]/60'
                    }`}
                  />
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-[#E9EFF1] mb-5"></div>
                  <p className="text-[#0C3130]/70 leading-relaxed text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
