import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { countElementsPage } from "@/utils/count-elements-in-page";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
interface PaginationProps extends React.HtmlHTMLAttributes<HTMLElement> {
  allCount?: number;
}

const PaginationBlock: React.FC<PaginationProps> = ({
  className,
  allCount = 0,
  ...props
}) => {
  const [pageSelect, setPageSelect] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const deletQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );
  useEffect(() => {
    pageSelect > 1
      ? router.push(
          pathname + "?" + createQueryString("page", String(pageSelect)),
          { scroll: false }
        )
      : router.push(pathname + "?" + deletQueryString("page"), {
          scroll: false,
        });
  }, [pageSelect]);

  return (
    <Pagination {...props} className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={() => setPageSelect((curentPage) => curentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          {allCount ? (
            new Array(Math.ceil(allCount / countElementsPage))
              .fill("")
              .map((i, index) => (
                <PaginationLink
                  key={index}
                  onClick={() => setPageSelect(index + 1)}
                  href='#'
                >
                  {index + 1}
                </PaginationLink>
              ))
          ) : (
            <PaginationLink onClick={() => setPageSelect(1)} href='#'>
              1
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>{/* <PaginationEllipsis /> */}</PaginationItem>
        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={() => setPageSelect((curentPage) => curentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBlock;
