import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PayTab = () => {
  return (
    <AccordionItem value='item-4'>
      <AccordionTrigger>Условия оплаты</AccordionTrigger>
      <AccordionContent className='space-y-4'>
        <div>
          <div className='font-medium text-gray-900'>1. Предоплата:</div>
          <div className='mt-2'>
            Может потребоваться частичная предоплата за вызов мастера, которая
            впоследствии включается в общую стоимость установки.
          </div>
        </div>
        <div>
          <div className='font-medium text-gray-900'>
            {" "}
            2. Оплата после замера:
          </div>
          <div className='mt-2'>
            Окончательный расчет производится по факту выполнения замера и
            составления сметы.
          </div>
        </div>
        <div>
          <div className='font-medium text-gray-900'>3. Способы оплаты:</div>
          <div className='mt-2'>
            Принимаются различные способы оплаты, включая наличные, банковские
            карты, онлайн-переводы или безналичный расчет для юридических лиц.
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PayTab;
