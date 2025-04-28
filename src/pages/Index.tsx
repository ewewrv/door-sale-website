
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Benefits from '@/components/Benefits';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* Benefits */}
        <Benefits />
        
        {/* Call to Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Открытие</h3>
              <p className="text-gray-400 mb-4">Качественные двери для вашего дома и офиса по доступным ценам.</p>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-2">
                <MapPin size={16} />
                <span>г. Москва, ул. Дверная, 42</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-2">
                <Clock size={16} />
                <span>Ежедневно с 9:00 до 20:00</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2">
                <li><Link to="/catalog/interior" className="text-gray-400 hover:text-white transition-colors">Межкомнатные двери</Link></li>
                <li><Link to="/catalog/entrance" className="text-gray-400 hover:text-white transition-colors">Входные двери</Link></li>
                <li><Link to="/catalog/sliding" className="text-gray-400 hover:text-white transition-colors">Раздвижные двери</Link></li>
                <li><Link to="/catalog/fireproof" className="text-gray-400 hover:text-white transition-colors">Противопожарные двери</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
                <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Доставка и установка</Link></li>
                <li><Link to="/guarantees" className="text-gray-400 hover:text-white transition-colors">Гарантии</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
              <Button className="w-full mb-3 bg-primary hover:bg-primary/90">Заказать звонок</Button>
              <p className="text-gray-400 text-sm">Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время.</p>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 Открытие — Магазин дверей. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
