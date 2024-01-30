"use client";

import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <div className='border-b border-gray-200'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <ol className='flex items-center py-4 text-sm space-x-4'>
          <li>
            <div className='flex items-center'>
              <Link href='/' className='mr-4 font-medium text-gray-900'>
                Главная
              </Link>
              <svg
                viewBox='0 0 6 20'
                aria-hidden='true'
                className='h-[1.25rem] w-auto text-gray-300'
              >
                <path
                  d='M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
          </li>
          <li className=''>
            <Link href='/products' className='mr-4 font-medium'>
              Каталог
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
