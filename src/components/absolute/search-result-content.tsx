"use client";

import { memo } from "react";

import { useSearchProducts } from "@/queries/product";
import NoResults from "./no-results";
import ProductsSearchBlock from "./products-search-block";
import SearchLoadig from "./search-loadig";

interface SearchResultContentProps {
  submit: string;
  loading?: boolean;
  onClose: () => void;
}

const SearchResultContent: React.FC<SearchResultContentProps> = ({
  loading,
  submit,
  onClose,
}) => {
  const { data, isLoading } = useSearchProducts(submit);

  if (loading || isLoading) return <SearchLoadig />;

  if (!data || !data?.length) return <NoResults />;

  if (data?.length)
    return <ProductsSearchBlock searchList={data} onClose={onClose} />;

  return <NoResults />;
};

export default memo(SearchResultContent);
