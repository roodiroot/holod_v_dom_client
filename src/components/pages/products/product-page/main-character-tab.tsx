import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MainCharacterTabProps extends React.HtmlHTMLAttributes<HTMLElement> {
  characteristics?: { id: number; title: string; description: string }[];
  type: string;
  brand: string;
}

const MainCharacterTab: React.FC<MainCharacterTabProps> = ({
  characteristics,
  type,
  brand,
}) => {
  return (
    <AccordionItem value='item-1'>
      <AccordionTrigger>Основные характеристики</AccordionTrigger>
      <AccordionContent>
        <ul className=''>
          <li className='relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200'>
            <span className='flex-1 leading-4 text-balance'>
              Бренд производитель:
            </span>
            <span className='text-gray-900 font-medium  text-right leading-4'>
              {brand}
            </span>
          </li>
          <li className='relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200'>
            <span className='flex-1 leading-4 text-balance'>
              Тип усстройства:
            </span>
            <span className='text-gray-900 font-medium text-right leading-4'>
              {type}
            </span>
          </li>
          {characteristics &&
            characteristics
              .filter(
                (i) =>
                  i.title === "Площадь помещения: м²." ||
                  i.title === "Серия" ||
                  // i.title === "Наличие WiFi:" ||
                  i.title === "Срок гарантии, мес." ||
                  i.title === "Теплопроизводительность, kBTU"
              )
              .map((i) => (
                <li
                  key={i.id}
                  className='relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200'
                >
                  <span className='flex-1 leading-4 text-balance '>
                    {i.title}
                  </span>
                  <span className='text-gray-900 font-medium text-right leading-4'>
                    {i.description}
                  </span>
                </li>
              ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default MainCharacterTab;
