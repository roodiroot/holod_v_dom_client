import table_1 from "@/utils/price.json";
import table_2 from "@/utils/additionalWorks.json";
import TableWorks from "./table-works";
import TableServicePrice from "./table-service-price";
import TableAddingServicePrice from "./table-adding-service-price";

const TableSection = () => {
  return (
    <div className='bg-white py-10'>
      <div className='mx-auto max-w-7xl'>
        <TableWorks
          title='Стоимость услуг'
          description='Детальныне цены на установку кондиционеров и дополнительные услуги.
            Обращаем внимание что цены на услуги могут меняться в зависимости от
            типа кондиционера. По этому для точного подсчета крайне рекомендуем
            созвониться со специалистом.'
        >
          <TableServicePrice className='-mx-4 mt-8 sm:mx-0' list={table_1} />
        </TableWorks>
        <TableWorks
          className='mt-16'
          title='Дополнительны работы'
          description='Цены являются предворительными и не могут являться публичной офертой. Для более точного рассчета обратитесь в компанию и уточните вашу стоимость установки согласгно вашим критериям.'
        >
          <TableAddingServicePrice
            className='-mx-4 mt-8 sm:mx-0'
            list={table_2}
          />
        </TableWorks>
      </div>
    </div>
  );
};

export default TableSection;
