"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import FilterElement from "@/components/pages/products/filter-element";
import { brands, square, types, wifi } from "@/utils/filters";
import useAddingParams from "@/hooks/use-adding-params";
import { useFetchBrands, useFetchTypes } from "@/queries/type&brand";

const FiltersBlock = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: typesList, isSuccess: isSuccessType } = useFetchTypes();
  const { data: brandList, isSuccess: isSuccessBrand } = useFetchBrands();

  const squareParam = searchParams.get("square");
  const wifiParam = searchParams.get("wifi");
  const typeIdParam = searchParams.get("typeId");
  const brandIdParam = searchParams.get("brandId");

  const [selectBrand, setSelectBrand] = useState(
    brandIdParam ? JSON.parse(brandIdParam) : []
  );
  const [selectType, setSelectType] = useState(
    typeIdParam ? JSON.parse(typeIdParam) : []
  );
  const [selectSquare, setSelectSquare] = useState(
    squareParam ? JSON.parse(squareParam) : []
  );
  const [selectWiFi, setSelectWiFi] = useState(
    wifiParam ? JSON.parse(wifiParam) : []
  );

  useAddingParams(searchParams, selectSquare, "square", router, pathname);
  useAddingParams(searchParams, selectBrand, "brandId", router, pathname);
  useAddingParams(searchParams, selectType, "typeId", router, pathname);
  useAddingParams(searchParams, selectWiFi, "wifi", router, pathname);

  return (
    <aside>
      <div className='hidden lg:block'>
        <form action='' className='space-y-10 divide-y divide-gray-200'>
          {isSuccessType && (
            <div>
              <FilterElement
                title='Тип устройств'
                value={selectType}
                setValue={setSelectType}
                list={typesList?.data.map((i) => {
                  return { name: i.name, value: i.id };
                })}
              />
            </div>
          )}

          {isSuccessBrand && (
            <div className='pt-10'>
              <FilterElement
                title='Бренды'
                value={selectBrand}
                setValue={setSelectBrand}
                list={brandList?.data.map((i) => {
                  return { name: i.name, value: i.id };
                })}
              />
            </div>
          )}

          <div className='pt-10'>
            <FilterElement
              title='Площадь помещения'
              value={selectSquare}
              setValue={setSelectSquare}
              list={square}
            />
          </div>
          <div className='pt-10'>
            <FilterElement
              title='Управление WiFi'
              value={selectWiFi}
              setValue={setSelectWiFi}
              list={wifi}
            />
          </div>
        </form>
      </div>
    </aside>
  );
};

export default FiltersBlock;

// ['square', 'Площадь помещения: м².'],
//     ['invertor', 'Тип компрессора:'],
//     ['wifi', 'Наличие WiFi:'],
//     ['energy', 'Класс энегроэффективности:'],
