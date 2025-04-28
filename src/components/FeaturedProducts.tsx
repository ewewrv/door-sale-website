
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Типы данных для товаров
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  imageSrc: string;
};

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Классика Модерн',
    category: 'Межкомнатные двери',
    price: 12500,
    discountPrice: 9990,
    imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Стальной страж',
    category: 'Входные двери',
    price: 28900,
    imageSrc: 'https://images.unsplash.com/photo-1510629040585-001b6f59d0d3?q=80&w=1287&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Эко Натура',
    category: 'Межкомнатные двери',
    price: 14200,
    discountPrice: 12800,
    imageSrc: 'https://images.unsplash.com/photo-1601412436965-fa80d58378c3?q=80&w=1364&auto=format&fit=crop'
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Популярные модели</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши самые востребованные модели дверей, которые сочетают в себе качество, стиль и доступную цену
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/catalog">Смотреть все модели</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
