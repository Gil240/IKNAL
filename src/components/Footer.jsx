import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    producto: [
      { name: 'Características', href: '#sobre-nosotros' },
      { name: 'Cómo Funciona', href: '#se-socio' },
      { name: 'Precios', href: '#' },
      { name: 'FAQ', href: '#faq' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
      { name: 'Blog', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Prensa', href: '#' },
    ],
    legal: [
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
    socios: [
      { name: 'Sé Repartidor', href: '#se-socio' },
      { name: 'Registra tu Negocio', href: '#se-socio' },
      { name: 'Programa de Afiliados', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer id="contacto" className="bg-white border-t border-[#E9EFF1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1BC8C0] to-[#6C4DFF] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-2xl font-bold text-[#0C3130]">Iknal</span>
            </a>
            <p className="mt-5 text-[#0C3130]/60 max-w-xs leading-relaxed">
              Conectamos clientes, microempresas y repartidores para impulsar la economía local.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-11 h-11 bg-[#E9EFF1] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1BC8C0] hover:to-[#6C4DFF] hover:text-white transition-all duration-300 text-[#0C3130]/60"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-[#0C3130] mb-5">Producto</h4>
            <ul className="space-y-3.5">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#0C3130]/60 hover:text-[#1BC8C0] transition-colors duration-200 text-[15px] inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[#0C3130] mb-5">Empresa</h4>
            <ul className="space-y-3.5">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#0C3130]/60 hover:text-[#1BC8C0] transition-colors duration-200 text-[15px] inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h4 className="font-semibold text-[#0C3130] mb-5">Socios</h4>
            <ul className="space-y-3.5">
              {footerLinks.socios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#0C3130]/60 hover:text-[#1BC8C0] transition-colors duration-200 text-[15px] inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[#0C3130] mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hola@iknal.com"
                  className="text-[#0C3130]/60 hover:text-[#6C4DFF] transition-colors duration-200 flex items-center gap-3 text-[15px]"
                >
                  <div className="w-9 h-9 bg-[#E7E2FF] rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#6C4DFF]" />
                  </div>
                  hola@iknal.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+525512345678"
                  className="text-[#0C3130]/60 hover:text-[#6C4DFF] transition-colors duration-200 flex items-center gap-3 text-[15px]"
                >
                  <div className="w-9 h-9 bg-[#E7E2FF] rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#6C4DFF]" />
                  </div>
                  +52 55 1234 5678
                </a>
              </li>
              <li className="text-[#0C3130]/60 flex items-center gap-3 text-[15px]">
                <div className="w-9 h-9 bg-[#BAE8E7] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#125E5C]" />
                </div>
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E9EFF1]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-[#0C3130]/50 text-sm">
              © {currentYear} Iknal. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#0C3130]/50 hover:text-[#6C4DFF] text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
