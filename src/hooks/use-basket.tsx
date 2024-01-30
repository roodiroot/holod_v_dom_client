import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BasketState {
  basketList: string[];
  addElementBasketList: (value: string) => void;
  removeElementBasketList: (value: string) => void;
}

const useBasket = create<BasketState, [["zustand/persist", BasketState]]>(
  persist(
    (set) => ({
      basketList: [],
      addElementBasketList: (value) =>
        set((state) => {
          if (state.basketList.includes(value)) {
            return { basketList: state.basketList };
          }
          return { basketList: [...state.basketList, value] };
        }),
      removeElementBasketList: (value) =>
        set((state) => {
          return { basketList: state.basketList.filter((i) => i !== value) };
        }),
    }),
    { name: "basket" }
  )
);

export default useBasket;
