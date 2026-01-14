import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const programs = [
    {
      title: 'Профессиональная переподготовка',
      duration: 'от 250 часов',
      description: 'Получите новую квалификацию и диплом о профессиональной переподготовке',
      categories: ['Педагогика', 'Психология', 'Менеджмент', 'Медицина'],
      icon: 'GraduationCap',
    },
    {
      title: 'Повышение квалификации',
      duration: 'от 16 часов',
      description: 'Обновите знания и получите удостоверение о повышении квалификации',
      categories: ['Образование', 'Здравоохранение', 'Госслужба', 'Бизнес'],
      icon: 'TrendingUp',
    },
    {
      title: 'Курсы и семинары',
      duration: 'от 8 часов',
      description: 'Краткосрочное обучение по актуальным темам с сертификатом',
      categories: ['IT-технологии', 'Маркетинг', 'HR', 'Финансы'],
      icon: 'BookOpen',
    },
  ];

  const teachers = [
    {
      name: 'Анна Смирнова',
      position: 'Кандидат педагогических наук',
      specialization: 'Методология образования',
      experience: '15+ лет',
    },
    {
      name: 'Дмитрий Кузнецов',
      position: 'Доктор психологических наук',
      specialization: 'Клиническая психология',
      experience: '20+ лет',
    },
    {
      name: 'Елена Волкова',
      position: 'Кандидат экономических наук',
      specialization: 'Менеджмент и управление',
      experience: '12+ лет',
    },
  ];

  const news = [
    {
      date: '15 января 2026',
      title: 'Новые программы повышения квалификации',
      description: 'Запускаем 5 новых курсов по актуальным направлениям',
      badge: 'Новости',
    },
    {
      date: '10 января 2026',
      title: 'Результаты государственной аккредитации',
      description: 'АКАДЕМИНЕКС успешно прошёл государственную аккредитацию',
      badge: 'Достижения',
    },
    {
      date: '5 января 2026',
      title: 'Открытие нового филиала',
      description: 'Рады объявить об открытии представительства в Санкт-Петербурге',
      badge: 'События',
    },
  ];

  const reviews = [
    {
      name: 'Мария Петрова',
      course: 'Профессиональная переподготовка',
      rating: 5,
      text: 'Отличная организация обучения! Преподаватели — настоящие профессионалы. Получила диплом и сразу нашла работу по новой специальности.',
      date: '14.01.2026',
    },
    {
      name: 'Александр Иванов',
      course: 'Повышение квалификации',
      rating: 5,
      text: 'Очень доволен курсами! Актуальные знания, удобная платформа для дистанционного обучения. Рекомендую всем коллегам.',
      date: '12.01.2026',
    },
    {
      name: 'Ольга Соколова',
      course: 'Курсы по маркетингу',
      rating: 5,
      text: 'Превосходное обучение! За короткий срок получила практические навыки, которые сразу применила в работе. Спасибо АКАДЕМИНЕКС!',
      date: '10.01.2026',
    },
  ];

  const faq = [
    {
      question: 'Какие документы я получу после обучения?',
      answer: 'После успешного завершения обучения вы получаете документ государственного образца: диплом о профессиональной переподготовке (от 250 часов), удостоверение о повышении квалификации (от 16 часов) или сертификат о прохождении курса. Все документы вносятся в Федеральный реестр сведений о документах об образовании (ФИС ФРДО).',
    },
    {
      question: 'Есть ли у вас лицензия на образовательную деятельность?',
      answer: 'Да, АКАДЕМИНЕКС имеет лицензию на осуществление образовательной деятельности, выданную Федеральной службой по надзору в сфере образования и науки (Рособрнадзор). Все документы об образовании признаются на территории Российской Федерации.',
    },
    {
      question: 'Можно ли учиться дистанционно?',
      answer: 'Да, большинство наших программ доступны в дистанционном формате. Вы получаете доступ к образовательной платформе, где размещены все учебные материалы, видеолекции и тесты. Обучение проходит в удобном для вас темпе.',
    },
    {
      question: 'Сколько стоит обучение?',
      answer: 'Стоимость зависит от выбранной программы и количества часов обучения. Профессиональная переподготовка — от 15 000 рублей, повышение квалификации — от 3 000 рублей, краткосрочные курсы — от 1 500 рублей. Для постоянных клиентов и при групповых заявках действуют скидки.',
    },
    {
      question: 'Как долго длится обучение?',
      answer: 'Продолжительность зависит от программы: краткосрочные курсы — от 1 недели, повышение квалификации — от 2 недель до 2 месяцев, профессиональная переподготовка — от 2 до 6 месяцев. При дистанционном обучении вы можете учиться в комфортном для вас темпе.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  АКАДЕМИНЕКС
                </h1>
                <p className="text-xs text-muted-foreground">Образовательная академия</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'programs', label: 'Программы' },
                { id: 'teachers', label: 'Преподаватели' },
                { id: 'news', label: 'Новости' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="gradient-primary text-white hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-orange-50/50 -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 gradient-primary text-white border-0">
              Лицензия Рособрнадзора
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Образование
              </span>
              <br />
              <span className="text-foreground">нового уровня</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Профессиональная переподготовка и повышение квалификации с получением документов государственного образца
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-white text-lg px-8 py-6 hover:opacity-90 hover-scale"
                onClick={() => scrollToSection('programs')}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Выбрать программу
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover-scale"
                onClick={() => scrollToSection('about')}
              >
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'Users', value: '5000+', label: 'Выпускников' },
                { icon: 'Award', value: '150+', label: 'Программ' },
                { icon: 'Clock', value: '15', label: 'Лет опыта' },
                { icon: 'Star', value: '4.9', label: 'Рейтинг' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-secondary mb-3">
                    <Icon name={stat.icon as any} className="text-white" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 gradient-accent text-white border-0">О компании</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                АНО ДПО <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">АКАДЕМИНЕКС</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Автономная некоммерческая организация дополнительного профессионального образования
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:border-primary transition-colors hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Предоставление качественного дополнительного профессионального образования, соответствующего современным требованиям рынка труда и законодательству РФ.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-colors hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 gradient-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Eye" className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Наше видение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Стать ведущей образовательной организацией России в сфере профессиональной переподготовки и повышения квалификации специалистов.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Преимущества обучения в АКАДЕМИНЕКС</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: 'FileCheck', title: 'Документы гос. образца', text: 'Диплом или удостоверение в реестре ФИС ФРДО' },
                    { icon: 'Laptop', title: 'Дистанционное обучение', text: 'Учитесь в удобное время из любой точки России' },
                    { icon: 'Users', title: 'Опытные преподаватели', text: 'Кандидаты и доктора наук, практикующие эксперты' },
                    { icon: 'Clock', title: 'Гибкий график', text: 'Индивидуальный темп обучения и поддержка 24/7' },
                    { icon: 'CheckCircle', title: 'Государственная лицензия', text: 'Рособрнадзор, соответствие ФЗ-273' },
                    { icon: 'TrendingUp', title: 'Актуальные программы', text: 'Обновляемые курсы по запросам работодателей' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-white" size={22} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-primary text-white border-0">Программы обучения</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Выберите свой <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">путь развития</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 150 аккредитованных программ в различных отраслях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover-scale hover:shadow-2xl">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    <Badge variant="secondary" className="mb-3">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {program.duration}
                    </Badge>
                    <p>{program.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-muted-foreground">Направления:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.categories.map((cat, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full gradient-secondary text-white hover:opacity-90">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-secondary text-white border-0">Наши преподаватели</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Учитесь у <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">лучших экспертов</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center border-2 hover:border-secondary transition-all hover-scale">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto gradient-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name="User" className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-xl mb-1">{teacher.name}</CardTitle>
                  <CardDescription>
                    <Badge className="mb-2 gradient-accent text-white border-0">{teacher.position}</Badge>
                    <p className="text-sm mt-2">{teacher.specialization}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span className="text-sm font-semibold">{teacher.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="licenses" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 gradient-primary text-white border-0">Лицензии и документы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Работаем <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">легально</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Вся деятельность АКАДЕМИНЕКС соответствует законодательству Российской Федерации
            </p>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { 
                      icon: 'FileText', 
                      title: 'Лицензия Рособрнадзора',
                      text: 'На осуществление образовательной деятельности. Соответствие ФЗ-273 "Об образовании"',
                      law: 'ФЗ № 273-ФЗ от 29.12.2012'
                    },
                    { 
                      icon: 'Shield', 
                      title: 'Обработка персональных данных',
                      text: 'Соблюдение требований по защите персональных данных обучающихся',
                      law: 'ФЗ № 152-ФЗ от 27.07.2006'
                    },
                    { 
                      icon: 'Building', 
                      title: 'Регистрация НКО',
                      text: 'Автономная некоммерческая организация, зарегистрированная в установленном порядке',
                      law: 'ФЗ № 7-ФЗ от 12.01.1996'
                    },
                    { 
                      icon: 'CheckCircle', 
                      title: 'Аккредитация программ',
                      text: 'Все программы соответствуют профессиональным стандартам и требованиям работодателей',
                      law: 'Приказ № 1493 от 04.08.2023'
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-left">
                      <div className="flex gap-4 mb-3">
                        <div className="flex-shrink-0 w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                          <Icon name={item.icon as any} className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                          <Badge variant="outline" className="text-xs mb-2">{item.law}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
                <Separator className="my-8" />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Все выданные документы об образовании вносятся в Федеральную информационную систему «Федеральный реестр сведений о документах об образовании и (или) о квалификации, документах об обучении» (ФИС ФРДО)
                  </p>
                  <Button variant="outline" className="hover-scale">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать копии документов
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-accent text-white border-0">Новости и события</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Будьте в <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">курсе событий</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="gradient-accent text-white border-0">{item.badge}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <Button variant="ghost" className="w-full hover-scale">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-secondary text-white border-0">Отзывы студентов</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Что говорят <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">наши выпускники</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-all hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                        <Icon name="User" className="text-white" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{review.name}</CardTitle>
                        <CardDescription className="text-xs">{review.course}</CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{review.text}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" size={12} />
                    {review.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 gradient-primary text-white border-0">Вопросы и ответы</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Часто задаваемые <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">вопросы</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Начните обучение уже сегодня
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Свяжитесь с нами для консультации и выбора подходящей программы
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', subtitle: 'Пн-Пт с 9:00 до 18:00' },
                { icon: 'Mail', title: 'Email', value: 'info@akademinex.ru', subtitle: 'Ответим в течение часа' },
                { icon: 'MapPin', title: 'Адрес', value: 'г. Москва', subtitle: 'Центральный офис' },
              ].map((contact, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover-scale">
                  <CardHeader>
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={contact.icon as any} size={28} />
                    </div>
                    <CardTitle className="text-sm opacity-80">{contact.title}</CardTitle>
                    <CardDescription className="text-white text-lg font-bold">{contact.value}</CardDescription>
                    <p className="text-sm opacity-70">{contact.subtitle}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 hover-scale">
              <Icon name="Send" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-white font-bold">АКАДЕМИНЕКС</span>
              </div>
              <p className="text-sm leading-relaxed">
                Автономная некоммерческая организация дополнительного профессионального образования
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О компании</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="hover:text-white transition-colors">Программы</button></li>
                <li><button onClick={() => scrollToSection('teachers')} className="hover:text-white transition-colors">Преподаватели</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Отзывы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Лицензия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Договор оферты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реквизиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@akademinex.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва</span>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 АНО ДПО АКАДЕМИНЕКС. Все права защищены.</p>
            <p className="text-xs text-gray-500">
              Соответствие: ФЗ-273, ФЗ-152, ФЗ-149, ФЗ-7, Постановление 1802, Приказ 1493
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
