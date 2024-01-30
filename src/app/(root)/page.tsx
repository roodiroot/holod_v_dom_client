import HeroAction from "@/components/pages/hero/hero-action";
import HeroSlider from "@/components/pages/hero/hero-slider";

export default function Home() {
  return (
    <main className=''>
      <div className='relative overflow-hidden bg-white'>
        <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
          <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
            <div className='sm:max-w-lg'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Установка систем кондиционирования в Мордовии
              </h1>
              <p className='mt-4 text-xl text-gray-500 text-balance'>
                Мы более 5ти лет делаем климат в Ваших домах идеальным. Лучшие
                модели, мастерская установки и качественный авторизованный
                сервис.
              </p>
            </div>
            <HeroAction />
            <HeroSlider />
          </div>
        </div>
      </div>
    </main>
  );
}
