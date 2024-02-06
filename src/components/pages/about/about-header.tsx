const AboutHeader: React.FC = () => {
  return (
    <div className='lg:max-w-lg'>
      <p className='text-base font-semibold leading-7 text-accent-600'>О нас</p>
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        История компании “Холод в дом”
      </h1>
      <p className='mt-6 text-xl leading-8 text-gray-700'>
        Начав свой путь в 2019 г, наша компания изначально состояла всего из
        пары энтузиастов, увлеченных климатической техникой.
      </p>
    </div>
  );
};

export default AboutHeader;
