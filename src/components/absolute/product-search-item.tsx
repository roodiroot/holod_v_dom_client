import Link from "next/link";
import { TbAirConditioning } from "react-icons/tb";

interface ProductSearchItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  id: string;
  name: string;
  type: string;
  brand: string;
  onClose: () => void;
}

const ProductSearchItem: React.FC<ProductSearchItemProps> = ({
  id,
  name,
  type,
  brand,
  onClose,
}) => {
  return (
    <li className='select-none items-center group hover:bg-accent'>
      <Link
        onClick={onClose}
        href={`/products/${id}`}
        scroll={false}
        className='flex cursor-default px-4 py-2'
      >
        <TbAirConditioning className='w-6 h-6 flex-none text-gray-400 group-hover:text-white' />
        <div className='ml-3 flex-1 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-white'>
          {name} / {type} / {brand}
        </div>
      </Link>
    </li>
  );
};

export default ProductSearchItem;
