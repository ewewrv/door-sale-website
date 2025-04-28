
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517898717281-8e4385a41802?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7)"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl bg-white/90 p-8 rounded-lg shadow-lg animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Двери для вашего комфорта
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Широкий выбор качественных дверей для дома и офиса по привлекательным ценам с профессиональной установкой
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/catalog" className="text-white">Смотреть каталог</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
