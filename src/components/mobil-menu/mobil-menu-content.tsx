import Link from "next/link";
import BurgerBatton from "../ui/burger-batton";
import MenuLinkHref from "./menu-link-href";

const MobilMenuContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      <div className='flex px-4 pb-2 pt-[1.25rem]'>
        <BurgerBatton onClick={onClose} open />
      </div>
      <div className='border-t border-gray-200 px-4 py-6 space-y-6'>
        <MenuLinkHref label='Главная' href='/' onClick={onClose} />
        <MenuLinkHref label='Каталог' href='/products' onClick={onClose} />
        <MenuLinkHref label='О нас' href='/about' onClick={onClose} />
        <MenuLinkHref label='Контакты' href='/contacts' onClick={onClose} />
        <div className='border-t border-gray-200 py-6 space-y-6'>
          <MenuLinkHref label='акции' href='/sales' onClick={onClose} />
          <div className='flow-root'>
            <a href={"/"} className='-m-2 block p-2 font-medium text-gray-900'>
              +7 (905) 009 68 88
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilMenuContent;
