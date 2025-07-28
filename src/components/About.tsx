import { Crown, Heart, Sparkles, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "أناقة ملكية",
      description: "تجربة فاخرة تليق بجلالتك مع أفضل المنتجات الطبيعية المغربية الأصيلة"
    },
    {
      icon: Heart,
      title: "عناية شخصية",
      description: "فريق من الخبيرات المتخصصات في فنون الجمال المغربي التقليدي والحديث"
    },
    {
      icon: Sparkles,
      title: "تراث أصيل",
      description: "نحافظ على الطقوس المغربية العريقة مع لمسة عصرية تناسب المرأة السعودية"
    },
    {
      icon: Star,
      title: "جودة عالمية",
      description: "أعلى معايير النظافة والجودة في بيئة مريحة ومليئة بالدفء والضيافة"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-moroccan-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Crown className="w-8 h-8 text-primary" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
          <h2 className="font-arabic-display text-5xl md:text-6xl font-bold text-gradient-royal mb-6">
            من نحن
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مركز بيت سلطانة هو وجهتك المميزة للعناية بالجمال، حيث نمزج بين سحر التراث المغربي الأصيل وأحدث تقنيات العناية بالجمال، لنقدم لك تجربة استثنائية تليق بأناقتك وجمالك الطبيعي
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-royal p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-royal group-hover:shadow-moroccan transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-arabic-display text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="font-arabic text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-royal p-12">
            <h3 className="font-arabic-display text-4xl font-bold text-gradient-emerald mb-8">
              قصتنا
            </h3>
            <p className="font-arabic text-lg text-foreground leading-relaxed mb-6">
              في قلب المملكة العربية السعودية، وُلدت فكرة مركز بيت سلطانة من شغف عميق بالتراث المغربي العريق وفنون الجمال الأصيلة. نؤمن بأن كل امرأة تستحق أن تشعر كالسلطانة، وأن الجمال الحقيقي ينبع من الاعتناء بالذات باستخدام أنقى المواد الطبيعية وأرقى الطقوس التقليدية.
            </p>
            <p className="font-arabic text-lg text-foreground leading-relaxed">
              يجمع فريقنا من الخبيرات المتخصصات بين المعرفة العميقة بالطرق التقليدية المغربية والتقنيات الحديثة، لنقدم لك تجربة متكاملة تغذي روحك وتجدد جمالك الطبيعي في أجواء من الراحة والاسترخاء.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Divider */}
      <div className="moroccan-divider mt-20"></div>
    </section>
  );
};

export default About;