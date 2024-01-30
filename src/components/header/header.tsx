import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Logo from "@/components/ui/logo";
import MobilMenuButton from "./mobil-menu-button";
import BasketItem from "./basket-item";
const Header = () => {
  return (
    <header className='relative bg-white'>
      <p className='flex h-10 items-center justify-center bg-accent-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>
        До 17 Января 2024 года доставка бесплатно
      </p>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='border-b border-gray-200 '>
          <div className='flex h-16 items-center'>
            <MobilMenuButton />
            <div className='ml-4 flex lg:ml-0'>
              <Logo className='w-auto h-11' />
            </div>
            <div className='hidden lg:ml-8 lg:block lg:self-stretch'>
              <div className='flex h-full space-x-8'>
                <Link
                  href={"/"}
                  className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition'
                >
                  Главная
                </Link>
                <Link
                  href={"/products"}
                  className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition'
                >
                  Каталог
                </Link>
                <Link
                  href={"/about"}
                  className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition'
                >
                  О нас
                </Link>
                <Link
                  href={"/contacts"}
                  className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition'
                >
                  Контакты
                </Link>
              </div>
            </div>
            <div className='ml-auto flex items-center'>
              <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end space-x-6'>
                <a
                  href=''
                  className='text-sm font-medium text-gray-700 transition hover:text-gray-800'
                >
                  акции
                </a>
                <span className='h-6 w-[1px] bg-gray-200'></span>
                <a
                  href=''
                  className='text-sm font-medium text-gray-700 transition hover:text-gray-800'
                >
                  +7 (905) 009 68 88
                </a>
              </div>
              <div className='flex lg:ml-8'>
                <a href='' className='text-gray-400 p-2'>
                  <MagnifyingGlassIcon className='w-6 h-6' />
                </a>
              </div>
              <div className='ml-4 flow-root lg:ml-6'>
                <BasketItem />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
