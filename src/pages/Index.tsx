import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Apple',
      title: 'Индивидуальная программа питания',
      description: 'Персональный план питания, разработанный с учетом ваших целей, образа жизни и предпочтений.',
      duration: '3 месяца',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Activity',
      title: 'Комплексная диагностика здоровья',
      description: 'Подробный анализ состояния здоровья, пищевых привычек и составление рекомендаций.',
      duration: '1 консультация',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Users',
      title: 'Групповые программы',
      description: 'Занятия в мини-группах с поддержкой нутрициолога и обменом опытом участников.',
      duration: '6 недель',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Calendar',
      title: 'Долгосрочное сопровождение',
      description: 'Постоянная поддержка, корректировка питания и контроль результатов в течение года.',
      duration: '12 месяцев',
      price: 'от 40 000 ₽'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      result: '-12 кг за 3 месяца',
      text: 'Благодаря грамотной программе питания я не только похудела, но и улучшила состояние кожи и энергию. Профессиональный подход и постоянная поддержка помогли достичь результата.',
      image: 'https://cdn.poehali.dev/projects/6ab386a5-d262-4e63-b722-dd603d2ccee8/files/1be53036-ee5e-472c-b313-9473b187f992.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      result: 'Нормализация сахара в крови',
      text: 'После консультации пересмотрел свой рацион. Показатели здоровья значительно улучшились, чувствую себя намного лучше. Рекомендую всем, кто заботится о здоровье.',
      image: 'https://cdn.poehali.dev/projects/6ab386a5-d262-4e63-b722-dd603d2ccee8/files/76024c45-3851-480a-a383-8434e4a0bf66.jpg'
    },
    {
      name: 'Екатерина Волкова',
      result: '-8 кг и улучшение пищеварения',
      text: 'Долго искала специалиста, который поможет решить проблемы с ЖКТ. Индивидуальная программа дала результаты уже через месяц. Очень довольна сотрудничеством!',
      image: 'https://cdn.poehali.dev/projects/6ab386a5-d262-4e63-b722-dd603d2ccee8/files/1e3c2337-d16d-4759-95c9-f025004c94fc.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={28} />
            <span className="text-xl sm:text-2xl font-bold text-primary">NutriLife</span>
          </div>
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button asChild className="text-sm sm:text-base">
            <a href="#consultation">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Профессиональная нутрициология для вашего здоровья
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Персональные программы питания на основе научного подхода и многолетнего опыта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" asChild>
                <a href="#consultation" className="text-lg px-8">
                  Записаться на консультацию
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services" className="text-lg px-8">
                  Узнать подробнее
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Услуги и программы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая соответствует вашим целям и потребностям
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={service.icon} className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Длительность</p>
                      <p className="font-semibold text-foreground">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Стоимость</p>
                      <p className="font-bold text-xl text-accent">{service.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Результаты наших клиентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы людей, которые достигли своих целей с нашей помощью
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-accent font-semibold">{testimonial.result}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Запись на консультацию
              </h2>
              <p className="text-lg text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message"
                      placeholder="Расскажите о ваших целях и пожеланиях"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={28} />
                <span className="text-xl font-bold">NutriLife</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональная нутрициология для здоровья и долголетия
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@nutrilife.ru
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Режим работы</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2026 NutriLife. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}