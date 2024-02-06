"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMessage } from "@/lib/send-message";
import { useState } from "react";

type InputsPropmptForm = {
  phone: string;
};

const PromptForm = () => {
  const [disabled, setDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsPropmptForm>();

  const onSubmit: SubmitHandler<InputsPropmptForm> = (data) => {
    setDisabled(true);
    sendMessage({ ...data, text: "Быстрая форма обратной связи" })
      .then((d) => {
        if (!d) return;
        setDisabled(false);
        reset({
          phone: "",
        });
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='mt-2 flex sm:max-w-md'
    >
      <Input
        {...register("phone", { pattern: regExp, required: true })}
        id='phone'
        placeholder='Введите телефон'
        className='col-span-3'
        invalid={!!errors.phone}
        inputMode='tel'
      />
      <div className='ml-4 shrink-0'>
        <Button disabled={disabled} onClick={handleSubmit(onSubmit)}>
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default PromptForm;
