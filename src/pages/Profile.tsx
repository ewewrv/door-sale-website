
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  User, Package, CreditCard, LogOut, 
  MapPin, Phone, Mail, Home, 
  ShoppingCart, FileText, Clock, Check, XCircle
} from 'lucide-react';
import Header from '@/components/Header';

// Типы для заказов
type OrderStatus = 'completed' | 'processing' | 'delivering' | 'canceled';

type OrderItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageSrc: string;
};

type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  totalPrice: number;
  items: OrderItem[];
  address: string;
  paymentMethod: string;
};

// Моковые данные заказов
const orders: Order[] = [
  {
    id: 'ORD-2025-0042',
    date: '15.04.2025',
    status: 'completed',
    totalPrice: 35800,
    items: [
      {
        id: 1,
        name: 'Классика Модерн (Белый)',
        quantity: 2,
        price: 9990,
        imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=200&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'Стальной страж (Коричневый)',
        quantity: 1,
        price: 28900,
        imageSrc: 'https://images.unsplash.com/photo-1510629040585-001b6f59d0d3?q=80&w=200&auto=format&fit=crop'
      }
    ],
    address: 'г. Москва, ул. Ленина, д. 15, кв. 42',
    paymentMethod: 'Банковская карта'
  },
  {
    id: 'ORD-2025-0036',
    date: '03.04.2025',
    status: 'delivering',
    totalPrice: 18500,
    items: [
      {
        id: 6,
        name: 'Купе Элегант (Прозрачный/Серебро)',
        quantity: 1,
        price: 16200,
        imageSrc: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=200&auto=format&fit=crop'
      },
      {
        id: 5,
        name: 'Гармония Лайт (Светлый дуб)',
        quantity: 1,
        price: 9800,
        imageSrc: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?q=80&w=200&auto=format&fit=crop'
      }
    ],
    address: 'г. Москва, ул. Ленина, д. 15, кв. 42',
    paymentMethod: 'Наличные при получении'
  },
  {
    id: 'ORD-2025-0028',
    date: '25.03.2025',
    status: 'canceled',
    totalPrice: 14200,
    items: [
      {
        id: 3,
        name: 'Эко Натура (Венге)',
        quantity: 1,
        price: 12800,
        imageSrc: 'https://images.unsplash.com/photo-1601412436965-fa80d58378c3?q=80&w=200&auto=format&fit=crop'
      }
    ],
    address: 'г. Москва, ул. Ленина, д. 15, кв. 42',
    paymentMethod: 'Банковская карта'
  }
];

// Функция для отображения статуса заказа
const OrderStatusBadge = ({ status }: { status: OrderStatus }) => {
  switch(status) {
    case 'completed':
      return <Badge className="bg-green-500 hover:bg-green-600">Выполнен</Badge>;
    case 'processing':
      return <Badge className="bg-blue-500 hover:bg-blue-600">В обработке</Badge>;
    case 'delivering':
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Доставляется</Badge>;
    case 'canceled':
      return <Badge className="bg-red-500 hover:bg-red-600">Отменен</Badge>;
    default:
      return null;
  }
};

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/" className="text-gray-500 hover:text-primary">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Личный кабинет</span>
          </div>
          
          <div className="grid grid-cols-12 gap-8">
            {/* Боковая панель */}
            <div className="col-span-12 md:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-2xl bg-primary text-white">ИИ</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-bold mb-1">Иванов Иван</h2>
                    <p className="text-gray-500">ivan@example.com</p>
                  </div>
                  
                  <nav className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                      <Link to="/profile">
                        <User size={18} />
                        <span>Профиль</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100" asChild>
                      <Link to="/profile/orders">
                        <Package size={18} />
                        <span>Мои заказы</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                      <Link to="/profile/addresses">
                        <MapPin size={18} />
                        <span>Адреса доставки</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                      <Link to="/profile/payment">
                        <CreditCard size={18} />
                        <span>Способы оплаты</span>
                      </Link>
                    </Button>
                    <Separator className="my-2" />
                    <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50">
                      <LogOut size={18} />
                      <span>Выйти</span>
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Основное содержимое */}
            <div className="col-span-12 md:col-span-9">
              <Tabs defaultValue="orders">
                <TabsList className="mb-8">
                  <TabsTrigger value="profile">Личные данные</TabsTrigger>
                  <TabsTrigger value="orders">Мои заказы</TabsTrigger>
                </TabsList>
                
                {/* Вкладка с личными данными */}
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Личные данные</CardTitle>
                      <CardDescription>Управляйте личной информацией и настройками аккаунта</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Имя</label>
                          <Input defaultValue="Иван" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Фамилия</label>
                          <Input defaultValue="Иванов" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <Input type="email" defaultValue="ivan@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Телефон</label>
                          <Input type="tel" defaultValue="+7 (999) 123-45-67" />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Адрес доставки по умолчанию</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Город</label>
                            <Input defaultValue="Москва" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Улица</label>
                            <Input defaultValue="Ленина" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Дом, корпус</label>
                            <Input defaultValue="15" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Квартира/офис</label>
                            <Input defaultValue="42" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Почтовый индекс</label>
                            <Input defaultValue="123456" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="bg-primary hover:bg-primary/90">Сохранить изменения</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Вкладка с заказами */}
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>Мои заказы</CardTitle>
                      <CardDescription>Просмотр и отслеживание ваших заказов</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {orders.length > 0 ? (
                        <div className="space-y-8">
                          {orders.map((order) => (
                            <div key={order.id} className="border rounded-lg overflow-hidden">
                              <div className="bg-gray-50 p-4 flex flex-wrap gap-4 justify-between items-center">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-medium">Заказ {order.id}</h3>
                                    <OrderStatusBadge status={order.status} />
                                  </div>
                                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                    <Clock size={14} /> от {order.date}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium text-lg">{order.totalPrice.toLocaleString()} ₽</p>
                                  <p className="text-sm text-gray-500">{order.items.length} товар(ов)</p>
                                </div>
                              </div>
                              
                              <div className="p-4 divide-y">
                                {order.items.map((item) => (
                                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                      <img 
                                        src={item.imageSrc} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-grow">
                                      <h4 className="font-medium">{item.name}</h4>
                                      <p className="text-sm text-gray-500">
                                        {item.quantity} шт. × {item.price.toLocaleString()} ₽
                                      </p>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-medium">
                                        {(item.quantity * item.price).toLocaleString()} ₽
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="bg-gray-50 p-4 text-sm">
                                <div className="flex items-start gap-2 mb-2">
                                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Адрес доставки</p>
                                    <p className="text-gray-600">{order.address}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CreditCard size={16} className="mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium">Способ оплаты</p>
                                    <p className="text-gray-600">{order.paymentMethod}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="border-t p-4 flex justify-end gap-3">
                                <Button variant="outline">Повторить заказ</Button>
                                <Button variant="outline">Детали заказа</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-lg font-medium mb-2">У вас пока нет заказов</h3>
                          <p className="text-gray-500 mb-6">Перейдите в каталог, чтобы сделать ваш первый заказ</p>
                          <Button asChild>
                            <Link to="/catalog">Перейти в каталог</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 Открытие — Магазин дверей. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
