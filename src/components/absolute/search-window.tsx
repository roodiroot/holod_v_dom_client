"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSearchProducts } from "@/queries/product";
import useSearchModal from "@/hooks/use-search-moda";
import NoResults from "@/components/absolute/no-results";
import MenuSearch from "@/components/absolute/menu-search";
import ProductsSearchBlock from "@/components/absolute/products-search-block";
import SearchLoadig from "@/components/absolute/search-loadig";

const SearchWindow = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [submit, setSubmit] = useState("");

  const { isOpen, onClose } = useSearchModal();
  const { data, isLoading } = useSearchProducts(submit);

  useEffect(() => {
    if (value !== "") {
      setLoading(true);
    }
    const delayDebounce = setTimeout(() => {
      setLoading(false);
      setSubmit(value);
    }, 1500);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  return (
    <Dialog modal open={isOpen} onOpenChange={onClose}>
      <DialogContent className='p-0 pb-3 gap-y-0 max-w-xl '>
        <div className='h-12 px-4 flex gap-x-4 items-center border-b border-gray-200'>
          <MagnifyingGlassIcon className='w-4 h-4' />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Введите критерии поиска'
            className='w-full h-full border-none outline-0 active:outline-none'
          />
        </div>
        <div className='relative px-4 pt-4 h-[300px] overflow-y-auto'>
          {(loading || isLoading) && <SearchLoadig />}
          <>
            {data ? (
              data?.length ? (
                <ProductsSearchBlock searchList={data} onClose={onClose} />
              ) : (
                <NoResults />
              )
            ) : (
              <MenuSearch onClose={onClose} />
            )}
          </>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchWindow;
