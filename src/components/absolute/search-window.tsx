"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import useSearchModal from "@/hooks/use-search-moda";
import SearchActionBody from "./search-action-body";

const SearchWindow = () => {
  const { isOpen, onClose } = useSearchModal();

  return (
    <Dialog modal open={isOpen} onOpenChange={onClose}>
      <DialogContent className='p-0 pb-3 gap-y-0 max-w-xl '>
        <SearchActionBody onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default SearchWindow;
