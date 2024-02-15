import { Toaster } from "@/components/ui/sonner";
import MobilMenu from "./mobil-menu";
import ModalWindow from "./modal-window";
import SearchWindow from "./search-window";
import MobilFilters from "./mobil-filters";

const Absolute = () => {
  return (
    <>
      <Toaster position='top-right' />
      <MobilMenu />
      <MobilFilters />
      <ModalWindow />
      <SearchWindow />
    </>
  );
};

export default Absolute;
