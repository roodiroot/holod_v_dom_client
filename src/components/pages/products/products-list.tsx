"use client";

import { useSearchParams } from "next/navigation";

import CardProduct from "@/components/pages/products/card-product";
import PaginationBlock from "./pagination-block";
import { useFetchProducts } from "@/queries/product";
import { Skeleton } from "@/components/ui/skeleton";

const ProductsList = () => {
  const searchParams = useSearchParams();

  const square = searchParams.get("square");
  const compressor = searchParams.get("compressor");
  const wifi = searchParams.get("wifi");
  const energy = searchParams.get("energy");
  const typeId = searchParams.get("typeId");
  const brandId = searchParams.get("brandId");
  const page = searchParams.get("page") ?? 1;
  const sort = searchParams.get("sort");

  const { data: res, isLoading } = useFetchProducts({
    square,
    compressor,
    wifi,
    energy,
    typeId,
    brandId,
    page,
    sort,
  });

  return (
    <>
      <section className='mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3'>
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
          {isLoading
            ? new Array(10).fill("").map((_, i) => (
                <div key={i} className='overflow-hidden rounded-lg '>
                  <Skeleton className='flex h-[395px]' />
                </div>
              ))
            : res?.data?.map((i) => (
                <CardProduct
                  key={i.id}
                  productId={i.id}
                  title={i.name}
                  price={i.price}
                  logo={i.logo}
                  options={i.options.filter(
                    (i) =>
                      i.title === "Площадь помещения: м²." ||
                      i.title === "Холодопроизводительность, kBTU" ||
                      i.title === "Наличие WiFi:"
                  )}
                />
              ))}
        </div>
      </section>
      <PaginationBlock className='mt-6 col-span-4' allCount={res?.count} />
    </>
  );
};

export default ProductsList;
