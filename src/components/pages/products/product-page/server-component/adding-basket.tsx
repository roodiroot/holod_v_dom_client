"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import useBasket from "@/hooks/use-basket";
import { cn } from "@/lib/utils";

interface AddingBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {
  prodId: string;
}

const AddingBasket: React.FC<AddingBasketProps> = ({
  prodId,
  className,
  ...props
}) => {
  const router = useRouter();
  const { basketList, addElementBasketList, removeElementBasketList } =
    useBasket();

  const togleProductBasket: () => void = () => {
    if (basketList.includes(prodId)) {
      removeElementBasketList(prodId);
      toast.info("Товар удален из корзины");
    } else {
      addElementBasketList(prodId);
      toast.info("Товар добавлен в корзину", {
        description: "Осталось оформить заказ!",
        action: {
          label: "Оформить",
          onClick: () => router.push("/basket"),
        },
      });
    }
  };

  return (
    <div {...props} className={cn("flex", className)}>
      <Button
        variant={basketList.includes(prodId) ? "togleDefault" : "default"}
        onClick={togleProductBasket}
        size='lg'
      >
        {basketList.includes(prodId)
          ? "Удалить из корзины"
          : "Добавить в корзину"}
      </Button>
    </div>
  );
};

export default AddingBasket;
