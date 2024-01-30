import { create } from "zustand";

interface ModalOpenState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = create<ModalOpenState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModal;
