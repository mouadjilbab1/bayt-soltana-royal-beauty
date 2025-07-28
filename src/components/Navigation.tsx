import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-primary/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-arabic-display font-bold text-gradient-royal">
              مركز بيت سلطانة
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-arabic font-semibold hover-royal text-lg"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-arabic">+966 50 123 4567</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="font-arabic">الرياض</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-elegant">
            <div className="py-6 px-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-right font-arabic font-semibold text-lg hover-royal py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-primary/10">
                <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-arabic">+966 50 123 4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-arabic">الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;