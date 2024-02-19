import Link from "next/link";

import Logo from "@/components/ui/logo";
import MobilMenuButton from "./mobil-menu-button";
import BasketItem from "./basket-item";
import SearchButton from "./search-button";
import { Truck } from "lucide-react";
const Header = () => {
  return (
    <header className='relative bg-white'>
      <Link
        href={"/delivery"}
        className='flex h-10 items-center justify-center bg-accent-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8'
      >
        Бесплатный замер и доставка техники *
        <Truck className='w-5 h-5 ml-2' />
      </Link>
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
                <Link
                  href='/sales'
                  className='text-sm font-medium text-gray-700 transition hover:text-gray-800'
                >
                  акции
                </Link>
                <span className='h-6 w-[1px] bg-gray-200'></span>
                <a
                  href='tel:+79050096888'
                  className='text-sm font-medium text-gray-700 transition hover:text-gray-800'
                >
                  +7 (905) 009 68 88
                </a>
              </div>
              <div className='flex lg:ml-8'>
                <SearchButton />
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
