import HeroAction from "@/components/pages/hero/main-block/hero-action";
import HeroSlider from "@/components/pages/hero/main-block/hero-slider";
import { cn } from "@/lib/utils";

const HeroBlock = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1
              className={cn(
                "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              )}
            >
              Установка <span className="text-accent">систем</span>{" "}
              кондиционирования в&nbsp;Мордовии.
            </h1>
            <p className="mt-4 text-xl ">
              Мы&nbsp;делаем климат в&nbsp;Ваших домах идеальным, лучшие модели,
              и&nbsp;качественный, авторизованый сервис.
            </p>
          </div>
          <div className="mt-10">
            <HeroSlider />
            <HeroAction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
