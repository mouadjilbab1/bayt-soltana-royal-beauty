import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    const phone = "+966501234567";
    const message = encodeURIComponent("مرحباً، أود حجز موعد في مركز بيت سلطانة");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com?q=Riyadh+Beauty+Salon", '_blank');
  };

  const callPhone = () => {
    window.open("tel:+966501234567");
  };

  const businessHours = [
    { day: "السبت - الأربعاء", time: "9:00 ص - 11:00 م" },
    { day: "الخميس", time: "9:00 ص - 12:00 ص" },
    { day: "الجمعة", time: "2:00 م - 11:00 م" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-moroccan-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <MessageCircle className="w-8 h-8 text-accent" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
          </div>
          <h2 className="font-arabic-display text-5xl md:text-6xl font-bold text-gradient-royal mb-6">
            تواصلي معنا
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتك على مدار الساعة. تواصلي معنا لحجز موعدك أو للاستفسار عن خدماتنا الفاخرة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* WhatsApp Button */}
            <div className="card-royal p-8">
              <h3 className="font-arabic-display text-3xl font-bold text-gradient-emerald mb-6">
                احجزي موعدك الآن
              </h3>
              <p className="font-arabic text-muted-foreground mb-8 leading-relaxed">
                احجزي موعدك بسهولة عبر الواتساب وستقوم إحدى مستشاراتنا بالتواصل معك لتأكيد الموعد والخدمة المطلوبة
              </p>
              <button 
                onClick={openWhatsApp}
                className="w-full btn-royal text-xl group flex items-center justify-center space-x-3 space-x-reverse"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-arabic">احجزي عبر الواتساب</span>
              </button>
            </div>

            {/* Contact Details */}
            <div className="grid gap-6">
              <div className="card-royal p-6 flex items-center space-x-4 space-x-reverse hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-arabic-display text-xl font-bold text-foreground mb-1">
                    اتصلي بنا
                  </h4>
                  <button 
                    onClick={callPhone}
                    className="font-arabic text-primary hover:text-secondary transition-colors"
                  >
                    +966 50 123 4567
                  </button>
                </div>
              </div>

              <div className="card-royal p-6 flex items-center space-x-4 space-x-reverse hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-arabic-display text-xl font-bold text-foreground mb-1">
                    موقعنا
                  </h4>
                  <button 
                    onClick={openGoogleMaps}
                    className="font-arabic text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    حي السفارات، طريق الملك فهد<br />
                    الرياض، المملكة العربية السعودية
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Map */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="card-royal p-8">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-arabic-display text-3xl font-bold text-gradient-royal">
                  ساعات العمل
                </h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-primary/10 last:border-b-0">
                    <span className="font-arabic font-semibold text-foreground">{schedule.day}</span>
                    <span className="font-arabic text-primary font-bold">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <p className="font-arabic text-sm text-center text-muted-foreground">
                  نستقبل الحجوزات حتى ساعة قبل إغلاق المركز
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="card-royal p-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-muted to-primary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-arabic-display text-2xl font-bold text-foreground mb-2">
                    خريطة الموقع
                  </h4>
                  <p className="font-arabic text-muted-foreground mb-4">
                    اضغطي لفتح الخريطة في تطبيق الخرائط
                  </p>
                  <button 
                    onClick={openGoogleMaps}
                    className="btn-emerald font-arabic"
                  >
                    اعرضي على الخريطة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="card-royal p-12 max-w-4xl mx-auto">
            <h3 className="font-arabic-display text-4xl font-bold text-gradient-emerald mb-6">
              هل أنت مستعدة لتجربة ملكية؟
            </h3>
            <p className="font-arabic text-xl text-muted-foreground mb-8 leading-relaxed">
              انضمي إلى مئات النساء اللواتي اخترن مركز بيت سلطانة لرحلة جمالهن. احجزي موعدك اليوم واكتشفي سحر التراث المغربي الأصيل
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={openWhatsApp}
                className="btn-royal text-xl font-arabic flex items-center justify-center space-x-3 space-x-reverse"
              >
                <MessageCircle className="w-6 h-6" />
                <span>احجزي الآن عبر الواتساب</span>
              </button>
              <button 
                onClick={callPhone}
                className="btn-emerald text-xl font-arabic flex items-center justify-center space-x-3 space-x-reverse"
              >
                <Phone className="w-6 h-6" />
                <span>اتصلي بنا مباشرة</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;