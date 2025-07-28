import { Bath, Crown, Flower, Gem, Leaf, Sparkles } from 'lucide-react';
import spaImage from '@/assets/spa-treatment.jpg';
import facialImage from '@/assets/facial-treatment.jpg';
import vipImage from '@/assets/vip-room.jpg';

const Services = () => {
  const services = [
    {
      icon: Bath,
      title: "حمام سلطانة التقليدي",
      description: "تجربة الحمام المغربي الأصيل بالصابون البلدي والطين المغربي الطبيعي لتنظيف عميق وتقشير مثالي",
      image: spaImage,
      price: "ابتداءً من 250 ريال",
      duration: "90 دقيقة"
    },
    {
      icon: Crown,
      title: "جلسة VIP الملكية",
      description: "جلسة شاملة تضم حمام مغربي، ماسك طبيعي، تدليك بالزيوت العطرية، وجلسة استرخاء في جناح خاص",
      image: vipImage,
      price: "ابتداءً من 450 ريال",
      duration: "180 دقيقة"
    },
    {
      icon: Flower,
      title: "ماسك الورد المغربي",
      description: "ماسك طبيعي من ماء الورد المغربي والطين الوردي لترطيب البشرة وإشراقها الطبيعي",
      image: facialImage,
      price: "ابتداءً من 180 ريال",
      duration: "60 دقيقة"
    },
    {
      icon: Gem,
      title: "الكرسي الإفريقي الملكي",
      description: "جلسة تدليك وتقشير بالزيوت الطبيعية الإفريقية على الكرسي التقليدي لاسترخاء عميق",
      image: spaImage,
      price: "ابتداءً من 200 ريال",
      duration: "75 دقيقة"
    },
    {
      icon: Leaf,
      title: "علاج الحناء الطبيعية",
      description: "رسمات حناء تقليدية بأجود أنواع الحناء الطبيعية المستوردة من المغرب",
      image: facialImage,
      price: "ابتداءً من 120 ريال",
      duration: "45 دقيقة"
    },
    {
      icon: Sparkles,
      title: "جلسة التألق المغربي",
      description: "عناية شاملة للوجه والجسم بالمنتجات المغربية الطبيعية لإطلالة مشرقة ومتألقة",
      image: vipImage,
      price: "ابتداءً من 320 ريال",
      duration: "120 دقيقة"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-moroccan-cream to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <Sparkles className="w-8 h-8 text-secondary" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>
          </div>
          <h2 className="font-arabic-display text-5xl md:text-6xl font-bold text-gradient-emerald mb-6">
            خدماتنا الفاخرة
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اختاري من مجموعة خدماتنا المميزة المستوحاة من التراث المغربي الأصيل، والمصممة خصيصاً لتمنحك تجربة جمال استثنائية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-royal overflow-hidden group hover:scale-105 transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moroccan-bronze/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-royal">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-primary-light font-arabic text-sm mb-1">{service.duration}</div>
                      <div className="text-white font-arabic font-bold text-lg">{service.price}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-arabic-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-arabic text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="w-full btn-emerald font-arabic">
                  احجزي الآن
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Packages */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-arabic-display text-4xl font-bold text-gradient-royal mb-4">
              باقات خاصة
            </h3>
            <p className="font-arabic text-lg text-muted-foreground">
              باقات مصممة خصيصاً للمناسبات الخاصة واليوم المثالي
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-royal p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-royal">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-arabic-display text-3xl font-bold text-foreground mb-4">
                باقة العروس الملكية
              </h4>
              <p className="font-arabic text-muted-foreground mb-6 leading-relaxed">
                باقة شاملة للعروس تشمل جلسة VIP، حمام مغربي، ماسك الذهب، حناء فاخرة، وجلسة تصفيف
              </p>
              <div className="text-2xl font-bold text-primary mb-4">850 ريال</div>
              <button className="btn-royal font-arabic">
                احجزي باقة العروس
              </button>
            </div>

            <div className="card-royal p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-emerald">
                <Gem className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-arabic-display text-3xl font-bold text-foreground mb-4">
                باقة التألق الأسبوعية
              </h4>
              <p className="font-arabic text-muted-foreground mb-6 leading-relaxed">
                عضوية أسبوعية تشمل حمام مغربي، ماسك طبيعي، وتدليك استرخاء لأسبوع من التألق
              </p>
              <div className="text-2xl font-bold text-secondary mb-4">600 ريال / أسبوعياً</div>
              <button className="btn-emerald font-arabic">
                اشتركي الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;