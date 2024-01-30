const HeroSlider: React.FC = () => {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
    >
      <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
        <div className='flex items-center space-x-6 lg:space-x-8'>
          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
          <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='h-64 w-44 overflow-hidden rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
