
import { ShieldCheck, Truck, Wrench, Clock } from 'lucide-react';

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: <ShieldCheck size={48} className="text-primary" />,
    title: 'Гарантия качества',
    description: 'На все двери предоставляется гарантия до 5 лет. Мы используем только проверенные материалы.'
  },
  {
    icon: <Truck size={48} className="text-primary" />,
    title: 'Быстрая доставка',
    description: 'Доставляем двери по Москве и области. Возможна доставка по всей России.'
  },
  {
    icon: <Wrench size={48} className="text-primary" />,
    title: 'Профессиональный монтаж',
    description: 'Наши специалисты имеют большой опыт установки дверей любой сложности.'
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Наши преимущества</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы стремимся сделать процесс выбора и покупки дверей максимально комфортным для вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg border border-gray-100">
              <div className="inline-flex justify-center items-center w-16 h-16 mb-6 bg-primary/10 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-4">Индивидуальный подход</h3>
            <p className="text-gray-600 mb-4">
              Наши консультанты помогут подобрать двери, которые идеально впишутся в ваш интерьер. 
              Мы предлагаем бесплатные консультации и замеры.
            </p>
            <div className="flex items-center text-primary font-medium">
              <Clock size={20} className="mr-2" />
              <span>Работаем без выходных с 9:00 до 20:00</span>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1470&auto=format&fit=crop" 
              alt="Интерьер с дверями" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
