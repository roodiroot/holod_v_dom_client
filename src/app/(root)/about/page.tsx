import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
          />
        </svg>
      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-accent-600'>
                О нас
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                История компании “Холод в дом”
              </h1>
              <p className='mt-6 text-xl leading-8 text-gray-700'>
                Начав свой путь в 2019 г, наша компания изначально состояла
                всего из пары энтузиастов, увлеченных климатической техникой.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <div className='relative w-[48rem] aspect-[16/11] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] overflow-hidden'>
            <Image
              width={912}
              height={540}
              className='absolute w-full h-full object-cover'
              src='/image/about.jpg'
              alt='about'
            />
          </div>
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <p>
                Пройдя путь от маленькой мастерской до ведущего установщика
                кондиционеров в Мордовии, мы сохранили свои основные принципы -
                качество, надежность и индивидуальный подход к каждому клиенту.
                Установка кондиционера - это не просто покупка оборудования, это
                инвестиция в комфорт вашего дома или офиса.
              </p>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CheckCircle2
                    className='mt-1 h-5 w-5 flex-none text-accent-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Профессиональная установка.
                    </strong>{" "}
                    Все специалисты - мастера своего дела, обеспечивают быструю
                    и аккуратную установку.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <CheckCircle2
                    className='mt-1 h-5 w-5 flex-none text-accent-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Индивидуальный подход.
                    </strong>{" "}
                    Мы всегда подбираем оборудование исходя из ваших нужд и
                    особенностей помещения.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <CheckCircle2
                    className='mt-1 h-5 w-5 flex-none text-accent-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Качественное обслуживание.
                    </strong>{" "}
                    Последующее обслуживание и ремонт, гарантия долговечность и
                    надежность наших систем.
                  </span>
                </li>
              </ul>
              <p className='mt-8'>
                Спасибо за ваш интерес к “Холод в Дом”! Мы ценим ваше время и
                стремимся сделать процесс выбора и установки кондиционера
                максимально простым и приятным. Ваши комфорт и удовлетворенность
                - наш главный приоритет. И уверены что вы по достоинству оцените
                наш сервис при встрече.
              </p>
              <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                Почему именно мы?
              </h2>
              <p className='mt-6'>
                Потому что мы не просто устанавливаем оборудование - мы создаем
                идеальный климат для вашей жизни. С нами вы получаете не только
                высококлассное оборудование, но и гарантию долгосрочной и
                надежной работы, профессиональную установку и обслуживание. Мы
                заботимся о каждом клиенте, потому что ваш комфорт - это наша
                репутация.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
