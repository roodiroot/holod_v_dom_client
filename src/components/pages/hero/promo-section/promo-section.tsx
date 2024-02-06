import Action from "@/components/pages/hero/promo-section/action";

const PromoSection = () => (
  <section className='bg-white py-16 sm:py-24'>
    <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
      <div className='absolute inset-0 overflow-hidden'>
        {/* <Image className="w-full h-full object-cover object-center" /> */}
      </div>
      <div className='absolute inset-0 bg-gray-900/50'></div>
      <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          Поможем с выбором
        </h2>
        <p className='mt-3 text-xl text-white'>
          Наша команда экспертов поможет вам найти идеальный кондиционер,
          который не заставит ваш кошелек плакать. Нажмите ниже, чтобы начать. И
          помните - лучше доверить выбор профессионалам, чем тратить вечность на
          сомнения!
        </p>
        <Action />
      </div>
    </div>
  </section>
);

export default PromoSection;
