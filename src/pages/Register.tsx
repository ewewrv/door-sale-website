
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import Header from '@/components/Header';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Регистрация</CardTitle>
            <CardDescription className="text-center">
              Создайте аккаунт для доступа к личному кабинету
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Имя</Label>
                <Input id="firstName" placeholder="Иван" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Фамилия</Label>
                <Input id="lastName" placeholder="Иванов" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Скрыть пароль" : "Показать пароль"}
                  </span>
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Минимум 8 символов, включая букву и цифру
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
              <Input 
                id="confirmPassword" 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p>
                Нажимая кнопку "Зарегистрироваться", вы соглашаетесь с 
                <Link to="/terms" className="text-primary hover:underline"> условиями использования </Link>
                и 
                <Link to="/privacy" className="text-primary hover:underline"> политикой конфиденциальности</Link>.
              </p>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              <UserPlus className="mr-2 h-4 w-4" />
              Зарегистрироваться
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="text-center text-sm">
              Уже есть аккаунт?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Войти
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 Открытие — Магазин дверей. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
