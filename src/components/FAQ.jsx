import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            Encuentra respuestas a las preguntas más comunes
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 transition-colors duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-secondary-900 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5">
                  <p className="text-secondary-600 leading-relaxed">
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
