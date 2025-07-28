import { Crown, Heart, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    const phone = "+966501234567";
    const message = encodeURIComponent("مرحباً، أود حجز موعد في مركز بيت سلطانة");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "معرض الصور", href: "#gallery" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "تواصلي معنا", href: "#contact" }
  ];

  const services = [
    "حمام سلطانة التقليدي",
    "جلسة VIP الملكية",
    "ماسك الورد المغربي",
    "الكرسي الإفريقي الملكي",
    "علاج الحناء الطبيعية",
    "باقة العروس الملكية"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-moroccan-bronze to-moroccan-olive text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30zM0 30c0 16.569 13.431 30 30 30V0C13.431 0 0 13.431 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <Crown className="w-8 h-8 text-primary" />
                <h3 className="font-arabic-display text-3xl font-bold text-gradient-royal">
                  مركز بيت سلطانة
                </h3>
              </div>
              <p className="font-arabic text-white/80 leading-relaxed mb-6">
                مركزك المميز للعناية بالجمال، حيث نمزج بين سحر التراث المغربي الأصيل وأحدث تقنيات العناية بالجمال لنقدم لك تجربة ملكية استثنائية.
              </p>
              <div className="flex items-center space-x-4 space-x-reverse">
                <button className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="w-10 h-10 bg-secondary/20 hover:bg-secondary/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-arabic-display text-2xl font-bold mb-6 text-primary-light">
                روابط سريعة
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="font-arabic text-white/80 hover:text-primary-light transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-arabic-display text-2xl font-bold mb-6 text-primary-light">
                خدماتنا
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="font-arabic text-white/80 hover:text-primary-light transition-colors">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-arabic-display text-2xl font-bold mb-6 text-primary-light">
                معلومات التواصل
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="font-arabic text-white/80">
                    حي السفارات، طريق الملك فهد<br />
                    الرياض، المملكة العربية السعودية
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-arabic text-white/80">+966 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-arabic text-white/80">واتساب متاح 24/7</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-accent text-white font-arabic font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-royal"
                >
                  احجزي موعدك الآن
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="font-arabic text-white/60 text-center md:text-right">
                © 2024 مركز بيت سلطانة. جميع الحقوق محفوظة.
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-white/60 font-arabic">
                <span>صُنع بـ</span>
                <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
                <span>للمرأة السعودية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;