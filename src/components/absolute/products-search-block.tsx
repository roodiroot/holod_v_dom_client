import { ProductSearchInterface } from "@/queries/product";
import ProductSearchItem from "./product-search-item";

interface ProductsSearchBlockProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  searchList: ProductSearchInterface[];
  onClose: () => void;
}

const ProductsSearchBlock: React.FC<ProductsSearchBlockProps> = ({
  searchList,
  onClose,
}) => {
  return (
    <>
      <h2 className='text-xs font-semibold text-gray-900'>Кондиционеры</h2>
      <ul className='-mx-4 mt-2 text-sm'>
        {searchList.map((i: any) => (
          <ProductSearchItem
            key={i.id}
            id={i.id}
            name={i.name}
            type={i.type}
            brand={i.brand}
            onClose={onClose}
          />
        ))}
      </ul>
    </>
  );
};

export default ProductsSearchBlock;
