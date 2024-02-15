import Link from "next/link";

const defaultLink = [
  { name: "Главная", href: "/" },
  { name: "Каталог", href: "/products" },
  { name: "О нас", href: "/about" },
];

const MenuSearch: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ul className='space-y-2'>
      <li>
        <h3 className='bg-gray-100 px-4 py-2.5 text-xs font-semibold -mx-4 -mt-4'>
          Основное меню
        </h3>
        <ul>
          {defaultLink.map((i) => (
            <li key={i.name} className='mt-2 text-sm'>
              <Link
                href={i.href}
                onClick={onClose}
                className='block px-4 py-2 cursor-default -mx-4 hover:bg-accent hover:text-white'
              >
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h3 className='bg-gray-100 px-4 py-2.5 text-xs font-semibold -mx-4'>
          Контакты
        </h3>
        <ul className='mt-2 text-sm grid grid-cols-1'>
          <div className='px-4 py-2 cursor-default -mx-4'>
            <div className='text-gray-900 font-semibold'>
              Служба поддержки и консультации:
            </div>
            <div className='pl-2 pt-2'>
              <p>Телефон: +7 (XXX) XXX-XX-XX</p>
              <p>Email: info@holodvdom.ru</p>
            </div>
          </div>
          <div className='px-4 py-2 cursor-default -mx-4'>
            <div className='text-gray-900 font-semibold'>
              Техническая поддержка:
            </div>
            <div className='pl-2 pt-2'>
              <p>Телефон: +7 (XXX) XXX-XX-XX</p>
              <p>Email: info@holodvdom.ru</p>
            </div>
          </div>
          <div className='px-4 py-2 cursor-default -mx-4'>
            <div className='text-gray-900 font-semibold'>Служба логистики:</div>
            <div className='pl-2 pt-2'>
              <p>Телефон: +7 (XXX) XXX-XX-XX</p>
              <p>Email: info@holodvdom.ru</p>
            </div>
          </div>
        </ul>
      </li>
    </ul>
  );
};

export default MenuSearch;
