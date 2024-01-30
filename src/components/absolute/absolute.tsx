import { Toaster } from "@/components/ui/sonner";
import MobilMenu from "./mobil-menu";
import ModalWindow from "./modal-window";

const Absolute = () => {
  return (
    <>
      <MobilMenu />
      <Toaster position='top-right' />
      <ModalWindow />
    </>
  );
};

export default Absolute;
