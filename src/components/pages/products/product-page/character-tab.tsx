import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CharacterTabProps extends React.HtmlHTMLAttributes<HTMLElement> {
  characteristics?: { id: number; title: string; description: string }[];
}

const CharacterTab: React.FC<CharacterTabProps> = ({ characteristics }) => {
  return (
    <AccordionItem value='item-2'>
      <AccordionTrigger>Все характеристики</AccordionTrigger>
      <AccordionContent>
        <ul className=''>
          {characteristics &&
            characteristics.map((i) => (
              <li
                key={i.id}
                className='relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200'
              >
                <span className='flex-1 leading-4 text-balance'>{i.title}</span>
                <span className='text-gray-900 font-medium leading-4 text-right'>
                  {i.description}
                </span>
              </li>
            ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CharacterTab;
