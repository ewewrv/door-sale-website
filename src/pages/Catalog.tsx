
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronRight, Filter, SlidersHorizontal } from 'lucide-react';
import Header from '@/components/Header';

// Типы данных для товаров
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  imageSrc: string;
  material?: string;
  color?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Классика Модерн',
    category: 'Межкомнатные двери',
    price: 12500,
    discountPrice: 9990,
    imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop',
    material: 'Массив сосны',
    color: 'Белый'
  },
  {
    id: 2,
    name: 'Стальной страж',
    category: 'Входные двери',
    price: 28900,
    imageSrc: 'https://images.unsplash.com/photo-1510629040585-001b6f59d0d3?q=80&w=1287&auto=format&fit=crop',
    material: 'Сталь',
    color: 'Коричневый'
  },
  {
    id: 3,
    name: 'Эко Натура',
    category: 'Межкомнатные двери',
    price: 14200,
    discountPrice: 12800,
    imageSrc: 'https://images.unsplash.com/photo-1601412436965-fa80d58378c3?q=80&w=1364&auto=format&fit=crop',
    material: 'Экошпон',
    color: 'Венге'
  },
  {
    id: 4,
    name: 'Престиж',
    category: 'Входные двери',
    price: 32500,
    imageSrc: 'https://images.unsplash.com/photo-1558642082-c81cbdd07d3d?q=80&w=1287&auto=format&fit=crop',
    material: 'Сталь + МДФ',
    color: 'Черный'
  },
  {
    id: 5,
    name: 'Гармония Лайт',
    category: 'Межкомнатные двери',
    price: 9800,
    imageSrc: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?q=80&w=1287&auto=format&fit=crop',
    material: 'МДФ',
    color: 'Светлый дуб'
  },
  {
    id: 6,
    name: 'Купе Элегант',
    category: 'Раздвижные двери',
    price: 18500,
    discountPrice: 16200,
    imageSrc: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=1332&auto=format&fit=crop',
    material: 'Стекло + Алюминий',
    color: 'Прозрачный/Серебро'
  },
];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([5000, 40000]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <Header />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Хлебные крошки */}
          <div className="flex items-center text-sm mb-8">
            <Link to="/" className="text-gray-500 hover:text-primary">Главная</Link>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <span className="text-gray-700 font-medium">Каталог</span>
          </div>

          <h1 className="text-3xl font-bold mb-8">Каталог дверей</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Фильтры */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Фильтры</h2>
                  <SlidersHorizontal size={20} className="text-gray-400" />
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Категория</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="cat-1" />
                      <Label htmlFor="cat-1" className="ml-2">Входные двери</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="cat-2" />
                      <Label htmlFor="cat-2" className="ml-2">Межкомнатные двери</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="cat-3" />
                      <Label htmlFor="cat-3" className="ml-2">Раздвижные двери</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="cat-4" />
                      <Label htmlFor="cat-4" className="ml-2">Противопожарные двери</Label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Цена, ₽</h3>
                  <div className="px-2">
                    <Slider 
                      defaultValue={[5000, 40000]} 
                      max={50000} 
                      min={0} 
                      step={1000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{priceRange[0].toLocaleString()} ₽</span>
                      <span>{priceRange[1].toLocaleString()} ₽</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Материал</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="mat-1" />
                      <Label htmlFor="mat-1" className="ml-2">Массив дерева</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="mat-2" />
                      <Label htmlFor="mat-2" className="ml-2">МДФ</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="mat-3" />
                      <Label htmlFor="mat-3" className="ml-2">Сталь</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="mat-4" />
                      <Label htmlFor="mat-4" className="ml-2">Экошпон</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="mat-5" />
                      <Label htmlFor="mat-5" className="ml-2">Стекло</Label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Цвет</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="col-1" />
                      <Label htmlFor="col-1" className="ml-2">Белый</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="col-2" />
                      <Label htmlFor="col-2" className="ml-2">Венге</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="col-3" />
                      <Label htmlFor="col-3" className="ml-2">Дуб</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="col-4" />
                      <Label htmlFor="col-4" className="ml-2">Коричневый</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="col-5" />
                      <Label htmlFor="col-5" className="ml-2">Черный</Label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Filter size={16} className="mr-2" />
                  Применить фильтры
                </Button>
              </div>
            </div>
            
            {/* Каталог товаров */}
            <div className="w-full lg:w-3/4">
              <Tabs defaultValue="all" className="mb-8">
                <TabsList className="w-full justify-start bg-white">
                  <TabsTrigger value="all">Все двери</TabsTrigger>
                  <TabsTrigger value="interior">Межкомнатные</TabsTrigger>
                  <TabsTrigger value="entrance">Входные</TabsTrigger>
                  <TabsTrigger value="sliding">Раздвижные</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <Card key={product.id} className="overflow-hidden hover-scale">
                        <div className="h-64 overflow-hidden">
                          <img 
                            src={product.imageSrc} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-xl">{product.name}</h3>
                              <p className="text-sm text-gray-500">{product.category}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {product.material && `Материал: ${product.material}`}
                                {product.color && `, Цвет: ${product.color}`}
                              </p>
                            </div>
                            <div className="text-right">
                              {product.discountPrice ? (
                                <>
                                  <p className="text-lg font-bold text-primary">{product.discountPrice.toLocaleString()} ₽</p>
                                  <p className="text-sm text-gray-500 line-through">{product.price.toLocaleString()} ₽</p>
                                </>
                              ) : (
                                <p className="text-lg font-bold text-primary">{product.price.toLocaleString()} ₽</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" className="w-1/2 border-primary text-primary hover:bg-primary/10">
                            Подробнее
                          </Button>
                          <Button className="w-1/2 ml-2 bg-primary hover:bg-primary/90">
                            Заказать
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="interior" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products
                      .filter(p => p.category === 'Межкомнатные двери')
                      .map((product) => (
                        <Card key={product.id} className="overflow-hidden hover-scale">
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={product.imageSrc} 
                              alt={product.name} 
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                            />
                          </div>
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold text-xl">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.category}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {product.material && `Материал: ${product.material}`}
                                  {product.color && `, Цвет: ${product.color}`}
                                </p>
                              </div>
                              <div className="text-right">
                                {product.discountPrice ? (
                                  <>
                                    <p className="text-lg font-bold text-primary">{product.discountPrice.toLocaleString()} ₽</p>
                                    <p className="text-sm text-gray-500 line-through">{product.price.toLocaleString()} ₽</p>
                                  </>
                                ) : (
                                  <p className="text-lg font-bold text-primary">{product.price.toLocaleString()} ₽</p>
                                )}
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="outline" className="w-1/2 border-primary text-primary hover:bg-primary/10">
                              Подробнее
                            </Button>
                            <Button className="w-1/2 ml-2 bg-primary hover:bg-primary/90">
                              Заказать
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="entrance" className="mt-6">
                  {/* Содержимое для входных дверей */}
                </TabsContent>
                
                <TabsContent value="sliding" className="mt-6">
                  {/* Содержимое для раздвижных дверей */}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Открытие</h3>
              <p className="text-gray-400 mb-4">Качественные двери для вашего дома и офиса по доступным ценам.</p>
              <div className="flex items-center gap-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
              </div>
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

export default Catalog;
