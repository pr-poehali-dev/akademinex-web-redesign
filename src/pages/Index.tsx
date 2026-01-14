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
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">АКАДЕМИНЕКС</h1>
                <p className="text-xs text-muted-foreground">АНО ДПО</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'programs', label: 'Программы' },
                { id: 'teachers', label: 'Преподаватели' },
                { id: 'licenses', label: 'Лицензии' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary text-primary">
              Лицензия Рособрнадзора
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Автономная некоммерческая организация дополнительного профессионального образования
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-primary">
              АКАДЕМИНЕКС
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Профессиональная переподготовка и повышение квалификации с получением документов государственного образца в соответствии с законодательством РФ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('programs')}
              >
                Программы обучения
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('licenses')}
              >
                Лицензии и документы
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-lg shadow-sm p-8">
              {[
                { icon: 'Users', value: '5000+', label: 'Выпускников' },
                { icon: 'Award', value: '150+', label: 'Программ обучения' },
                { icon: 'Clock', value: '15', label: 'Лет работы' },
                { icon: 'FileCheck', value: '100%', label: 'Документы гос. образца' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 mb-3">
                    <Icon name={stat.icon as any} className="text-primary" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">О компании</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Профессиональное образование в соответствии с требованиями законодательства РФ
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Предоставление качественного дополнительного профессионального образования, соответствующего современным требованиям рынка труда и законодательству Российской Федерации.
                  </p>
                </CardContent>
              </Card>
              <Card className="border shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <Icon name="Eye" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">Наше видение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Стать ведущей образовательной организацией России в сфере профессиональной переподготовки и повышения квалификации специалистов различных отраслей.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-slate-50 border-0">
              <CardHeader>
                <CardTitle className="text-xl">Преимущества обучения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: 'FileCheck', title: 'Документы государственного образца', text: 'Диплом или удостоверение с занесением в ФИС ФРДО' },
                    { icon: 'Shield', title: 'Лицензия Рособрнадзора', text: 'Соответствие ФЗ-273 "Об образовании в РФ"' },
                    { icon: 'Laptop', title: 'Дистанционное обучение', text: 'Образовательная платформа с доступом 24/7' },
                    { icon: 'Users', title: 'Квалифицированные преподаватели', text: 'Кандидаты и доктора наук, практикующие специалисты' },
                    { icon: 'Clock', title: 'Гибкий график обучения', text: 'Индивидуальный темп освоения программы' },
                    { icon: 'TrendingUp', title: 'Актуальные программы', text: 'Обновление курсов по требованиям работодателей' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">{item.title}</h4>
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

      <section id="programs" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Программы обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 150 аккредитованных образовательных программ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="border shadow-sm bg-white hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    <Badge variant="outline" className="mb-3 border-primary text-primary">
                      {program.duration}
                    </Badge>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground">Направления:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.categories.map((cat, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90" variant="default">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Преподавательский состав</h2>
            <p className="text-lg text-muted-foreground">
              Опытные специалисты с научными степенями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center border shadow-sm">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="User" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg mb-1">{teacher.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="mb-2 border-primary text-primary text-xs">
                      {teacher.position}
                    </Badge>
                    <p className="text-sm mt-2 text-muted-foreground">{teacher.specialization}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span className="text-sm">Опыт: {teacher.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="licenses" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Лицензии и документы</h2>
              <p className="text-lg text-muted-foreground">
                Деятельность в соответствии с законодательством РФ
              </p>
            </div>
            <Card className="border shadow-sm bg-white">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {[
                    { 
                      icon: 'FileText', 
                      title: 'Лицензия на образовательную деятельность',
                      text: 'Выдана Федеральной службой по надзору в сфере образования и науки (Рособрнадзор)',
                      law: 'ФЗ № 273-ФЗ от 29.12.2012 "Об образовании в РФ"'
                    },
                    { 
                      icon: 'Shield', 
                      title: 'Соблюдение требований по защите данных',
                      text: 'Обработка персональных данных обучающихся в соответствии с требованиями законодательства',
                      law: 'ФЗ № 152-ФЗ от 27.07.2006 "О персональных данных"'
                    },
                    { 
                      icon: 'Building', 
                      title: 'Регистрация АНО',
                      text: 'Автономная некоммерческая организация, зарегистрированная в установленном законом порядке',
                      law: 'ФЗ № 7-ФЗ от 12.01.1996 "О некоммерческих организациях"'
                    },
                    { 
                      icon: 'CheckCircle', 
                      title: 'Соответствие образовательных программ',
                      text: 'Программы соответствуют профессиональным стандартам и ФГОС',
                      law: 'Приказ Рособрнадзора № 1493 от 04.08.2023'
                    },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                          <Icon name={item.icon as any} className="text-primary" size={22} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                          <Badge variant="outline" className="text-xs mb-2">{item.law}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground pl-15">{item.text}</p>
                    </div>
                  ))}
                </div>
                <Separator className="my-8" />
                <div className="bg-slate-50 p-6 rounded-md">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    <strong>Федеральный реестр документов об образовании (ФИС ФРДО)</strong><br/>
                    Все выданные документы об образовании и о квалификации вносятся в Федеральную информационную систему «Федеральный реестр сведений о документах об образовании и (или) о квалификации, документах об обучении» в соответствии с Постановлением Правительства РФ № 1802 от 20.10.2021.
                  </p>
                  <Button variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать документы
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Новости и события</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{item.badge}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <Button variant="ghost" className="w-full justify-between">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Отзывы выпускников</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border shadow-sm bg-white">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-primary" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <CardDescription className="text-xs">{review.course}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Часто задаваемые вопросы</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-md px-6 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 text-sm">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Получить консультацию
            </h2>
            <p className="text-lg mb-12 opacity-90">
              Свяжитесь с нами для получения подробной информации о программах обучения
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', subtitle: 'Пн-Пт: 9:00 - 18:00' },
                { icon: 'Mail', title: 'Email', value: 'info@akademinex.ru', subtitle: 'Ответ в течение часа' },
                { icon: 'MapPin', title: 'Адрес', value: 'г. Москва', subtitle: 'Центральный офис' },
              ].map((contact, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center mx-auto mb-3">
                      <Icon name={contact.icon as any} size={24} />
                    </div>
                    <CardTitle className="text-sm opacity-80">{contact.title}</CardTitle>
                    <CardDescription className="text-white text-base font-semibold">{contact.value}</CardDescription>
                    <p className="text-sm opacity-70">{contact.subtitle}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={20} />
                </div>
                <span className="text-white font-semibold text-sm">АКАДЕМИНЕКС</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                АНО ДПО — Дополнительное профессиональное образование
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О компании</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="hover:text-white transition-colors">Программы</button></li>
                <li><button onClick={() => scrollToSection('teachers')} className="hover:text-white transition-colors">Преподаватели</button></li>
                <li><button onClick={() => scrollToSection('licenses')} className="hover:text-white transition-colors">Лицензии</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Документы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Лицензия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Договор оферты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реквизиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  <span>info@akademinex.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  <span>г. Москва</span>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2026 АНО ДПО АКАДЕМИНЕКС. Все права защищены.</p>
            <p>
              ФЗ-273 • ФЗ-152 • ФЗ-149 • ФЗ-7 • Постановление 1802 • Приказ 1493
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
