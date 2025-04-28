
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useState } from 'react';

const CallToAction = () => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код для отправки данных на сервер
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPhone('');
    }, 3000);
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Получите бесплатную консультацию</h2>
            <p className="text-xl opacity-90 mb-8">
              Оставьте свой номер телефона, и наш специалист перезвонит вам в течение 15 минут
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary font-bold mr-3">1</span>
                <span>Подберем двери под ваш интерьер и бюджет</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary font-bold mr-3">2</span>
                <span>Сделаем бесплатный замер и расчет стоимости</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary font-bold mr-3">3</span>
                <span>Доставим и установим в удобное для вас время</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Заполните форму</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Спасибо за заявку!</h4>
                <p className="text-gray-600">Наш менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Ваше имя</label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Номер телефона</label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mt-6">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
