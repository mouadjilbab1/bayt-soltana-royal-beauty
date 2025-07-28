import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';
import spaImage from '@/assets/spa-treatment.jpg';
import facialImage from '@/assets/facial-treatment.jpg';
import vipImage from '@/assets/vip-room.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroImage,
      alt: "أجواء المركز الفاخرة",
      category: "المركز"
    },
    {
      src: spaImage,
      alt: "جلسة الحمام المغربي",
      category: "الخدمات"
    },
    {
      src: facialImage,
      alt: "العناية بالوجه",
      category: "الخدمات"
    },
    {
      src: vipImage,
      alt: "جناح VIP الملكي",
      category: "جناح VIP"
    },
    {
      src: heroImage,
      alt: "استقبال المركز",
      category: "المركز"
    },
    {
      src: spaImage,
      alt: "منطقة الاسترخاء",
      category: "المركز"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-moroccan-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <ZoomIn className="w-8 h-8 text-accent" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
          </div>
          <h2 className="font-arabic-display text-5xl md:text-6xl font-bold text-gradient-royal mb-6">
            معرض الصور
          </h2>
          <p className="font-arabic text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشفي أجواء مركز بيت سلطانة الفاخرة وشاهدي جمال المكان الذي سيكون وجهتك للتألق والاسترخاء
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-elegant hover:shadow-royal transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-moroccan-bronze/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-primary-light font-arabic text-sm mb-1">{image.category}</div>
                  <div className="text-white font-arabic font-semibold text-lg">{image.alt}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-royal mb-2">500+</div>
            <div className="font-arabic text-muted-foreground">عميلة سعيدة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-emerald mb-2">15+</div>
            <div className="font-arabic text-muted-foreground">خدمة فاخرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-royal mb-2">5</div>
            <div className="font-arabic text-muted-foreground">سنوات خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-emerald mb-2">100%</div>
            <div className="font-arabic text-muted-foreground">منتجات طبيعية</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="صورة مكبرة"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;