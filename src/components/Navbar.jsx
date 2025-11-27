import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Sé Socio', href: '#se-socio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_30px_-10px_rgba(12,49,48,0.1)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1BC8C0] to-[#6C4DFF] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-2xl font-bold text-[#0C3130]">Iknal</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-[#0C3130]/70 hover:text-[#0C3130] font-medium text-[15px] transition-colors duration-200 rounded-full hover:bg-[#BAE8E7]/30"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2.5 text-[#0C3130] font-medium text-[15px] transition-all duration-200 hover:text-[#6C4DFF]">
              Login
            </button>
            <a
              href="#unete"
              className="bg-gradient-to-r from-[#6C4DFF] to-[#8B73FE] hover:from-[#5B3EE6] hover:to-[#7A62ED] text-white px-7 py-3 rounded-full font-semibold text-[15px] transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(108,77,255,0.5)] hover:shadow-[0_8px_30px_-5px_rgba(108,77,255,0.6)] hover:-translate-y-0.5"
            >
              Únete Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0C3130] hover:text-[#6C4DFF] p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-400 ease-out overflow-hidden ${
            isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-[#E9EFF1]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-[#0C3130]/80 hover:text-[#0C3130] hover:bg-[#BAE8E7]/20 font-medium rounded-xl transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-[#E9EFF1]">
              <button className="px-4 py-3 text-[#0C3130] hover:text-[#6C4DFF] font-medium text-left rounded-xl hover:bg-[#E7E2FF]/30 transition-all duration-200">
                Login
              </button>
              <a
                href="#unete"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-[#6C4DFF] to-[#8B73FE] text-white px-6 py-3.5 rounded-full font-semibold text-center transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(108,77,255,0.4)]"
              >
                Únete Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
