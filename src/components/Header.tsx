
import { Link } from 'react-router-dom';
import { Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
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
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-primary font-bold">+7 (999) 123-45-67</p>
              <p className="text-sm text-gray-500">Ежедневно с 9:00 до 20:00</p>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <User size={16} />
                  <span>Личный кабинет</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/login">Войти</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register">Регистрация</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile">Профиль</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
