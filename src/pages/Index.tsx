
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Benefits from '@/components/Benefits';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-2xl font-bold text-primary">Открытие</Link>
            
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex">
                <NavigationMenuItem>
                  <Link to="/catalog" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                    Каталог
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/services" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                    Услуги
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/gallery" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                    Галерея
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                    О нас
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contacts" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                    Контакты
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-primary font-bold">+7 (999) 123-45-67</p>
                <p className="text-sm text-gray-500">Ежедневно с 9:00 до 20:00</p>
              </div>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

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
