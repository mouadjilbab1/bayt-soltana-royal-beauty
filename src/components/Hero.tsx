import { ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';

const Hero = () => {
  const openWhatsApp = () => {
    const phone = "+966501234567";
    const message = encodeURIComponent("مرحباً، أود حجز موعد في مركز بيت سلطانة");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="مركز بيت سلطانة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-moroccan-bronze/80 via-primary-dark/60 to-secondary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-arabic-display text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            تألقي كسلطانة
          </h1>

          {/* Tagline */}
          <p className="font-arabic text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            اكتشفي سحر الجمال المغربي الأصيل في أفخر مركز للعناية بالجمال
          </p>

          <p className="font-arabic text-lg md:text-xl text-white/80 mb-12 max-w-xl mx-auto">
            خدماتنا الفاخرة مستوحاة من التراث المغربي العريق لتمنحك تجربة ملكية لا تُنسى
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={openWhatsApp}
              className="btn-royal group flex items-center space-x-3 space-x-reverse text-xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-arabic">احجزي موعدك الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="btn-emerald text-lg font-arabic">
              اكتشفي خدماتنا
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+500</div>
              <div className="font-arabic text-white/80">عميلة راضية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="font-arabic text-white/80">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="font-arabic text-white/80">منتجات طبيعية</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;