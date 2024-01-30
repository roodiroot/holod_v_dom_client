"use client";

import { Button } from "@/components/ui/button";
import useModal from "@/hooks/use-modal";

const HeroAction: React.FC = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <div className='mt-10'>
        <Button onClick={onOpen} size='xl'>
          Заказать установку
        </Button>
      </div>
    </div>
  );
};

export default HeroAction;
