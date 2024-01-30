"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PromptForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='mt-2 flex sm:max-w-md'
    >
      <Input inputMode='tel' />
      <div className='ml-4 shrink-0'>
        <Button>Отправить</Button>
      </div>
    </form>
  );
};

export default PromptForm;
