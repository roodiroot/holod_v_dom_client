import table_1 from "@/utils/price.json";
import table_2 from "@/utils/additionalWorks.json";
import TableWorks from "./table-works";
import TableServicePrice from "./table-service-price";
import TableAddingServicePrice from "./table-adding-service-price";

const TableSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl">
        <TableWorks
          info="*Стандартный монтаж включает в себя сверление отверстия под коммуникации
        до 80 сантиметров, 4 метра жидкостных трубок, кронштейны для наружного
        блока, крепления, короб канал до 50 см, удлинение провода до ближайшей
        точки питания до 3 метров. Работы производятся с использованием
        строительного пылесоса."
          title="Стоимость услуг"
          description="Детальные цены на установку кондиционеров и дополнительные услуги. Обращаем внимание, что цены на услуги могут меняться в зависимости от типа кондиционера и сложности монтажных работ. По этому для точного подсчета рекомендуем созвониться со специалистом."
        >
          <TableServicePrice className="-mx-4 mt-8 sm:mx-0" list={table_1} />
        </TableWorks>
        <TableWorks
          className="mt-16"
          title="Дополнительные работы"
          description="Цены являются предворительными и не могут являться публичной офертой. Для более точного рассчета обратитесь в компанию и уточните Вашу стоимость установки согласно Вашим критериям."
        >
          <TableAddingServicePrice
            className="-mx-4 mt-8 sm:mx-0"
            list={table_2}
          />
        </TableWorks>
      </div>
    </div>
  );
};

export default TableSection;
