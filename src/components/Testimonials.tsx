import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "أميرة المحمد",
      location: "الرياض",
      rating: 5,
      text: "تجربة استثنائية حقاً! الحمام المغربي في مركز بيت سلطانة لا يُضاهى، والفريق محترف جداً. شعرت وكأنني ملكة حقيقية. أنصح كل امرأة بتجربة هذا المكان الرائع.",
      service: "حمام سلطانة التقليدي"
    },
    {
      name: "نورا العبدالله",
      location: "جدة",
      rating: 5,
      text: "منذ أول زيارة والمركز أصبح مكاني المفضل للاسترخاء. جلسة VIP الملكية فاقت كل توقعاتي، والأجواء المغربية الأصيلة تشعرك بالدفء والراحة. مكان يستحق كل ريال.",
      service: "جلسة VIP الملكية"
    },
    {
      name: "سارة الخالد",
      location: "الدمام",
      rating: 5,
      text: "ماسك الورد المغربي غيّر بشرتي تماماً! البشرة أصبحت أكثر نعومة وإشراقاً. الخدمة راقية والمنتجات طبيعية 100%. تجربة لا تُنسى وسأعود بالتأكيد.",
      service: "ماسك الورد المغربي"
    },
    {
      name: "فاطمة الأحمد",
      location: "المدينة المنورة",
      rating: 5,
      text: "استعدادي ليوم زفافي كان مثالياً بفضل باقة العروس الملكية. كل التفاصيل كانت مدروسة بعناية، والنتيجة فاقت خيالي. شكراً لفريق بيت سلطانة على هذه التجربة الساحرة.",
      service: "باقة العروس الملكية"
    },
    {
      name: "ريم السعيد",
      location: "الطائف",
      rating: 5,
      text: "الكرسي الإفريقي الملكي تجربة فريدة من نوعها! التدليك بالزيوت الطبيعية كان مريحاً جداً، والأجواء هادئة ومليئة بالطاقة الإيجابية. مكان يجب زيارته.",
      service: "الكرسي الإفريقي الملكي"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-moroccan-cream to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Quote className="w-8 h-8 text-primary" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
          <h2 className="font-arabic-display text-5xl md:text-6xl font-bold text-gradient-emerald mb-6">
            آراء عميلاتنا
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تجارب حقيقية من عميلاتنا الكريمات اللواتي عشن معنا تجربة التألق والجمال في مركز بيت سلطانة
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="card-royal p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 text-primary/5 transform -translate-x-4 -translate-y-4">
              <Quote className="w-full h-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 text-secondary/5 transform translate-x-4 translate-y-4 rotate-180">
              <Quote className="w-full h-full" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Quote */}
              <blockquote className="font-arabic text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Service */}
              <div className="text-sm font-arabic text-primary mb-4 font-semibold">
                {testimonials[currentTestimonial].service}
              </div>

              {/* Author */}
              <div className="font-arabic-display text-2xl font-bold text-gradient-royal mb-2">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="font-arabic text-muted-foreground">
                {testimonials[currentTestimonial].location}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-royal hover:shadow-moroccan transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-white shadow-emerald hover:shadow-royal transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gradient-to-r from-primary to-secondary scale-125 shadow-royal'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 space-x-reverse bg-gradient-to-r from-card to-moroccan-cream rounded-2xl px-12 py-8 shadow-elegant">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-royal mb-2">4.9/5</div>
              <div className="font-arabic text-sm text-muted-foreground">تقييم العملاء</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-emerald mb-2">98%</div>
              <div className="font-arabic text-sm text-muted-foreground">رضا العملاء</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-royal mb-2">500+</div>
              <div className="font-arabic text-sm text-muted-foreground">تجربة ناجحة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;