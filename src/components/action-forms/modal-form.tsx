"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { sendMessage } from "@/lib/send-message";
import { cn } from "@/lib/utils";

type InputsContactForm = {
  name: string;
  phone: string;
};

interface ModalFormProps extends React.HtmlHTMLAttributes<HTMLElement> {
  closeModal: () => void;
  text: string;
}

const ModalForm: React.FC<ModalFormProps> = ({
  closeModal,
  text,
  ...props
}) => {
  const [disabled, setDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsContactForm>();

  const onSubmit: SubmitHandler<InputsContactForm> = (data) => {
    setDisabled(true);
    sendMessage({ ...data, text })
      .then((d) => {
        if (!d) return;
        setDisabled(false);
        reset({
          name: "",
          phone: "",
        });
        closeModal();
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  return (
    <>
      <div {...props} className='grid gap-4 py-4'>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label
            htmlFor='name'
            className={cn("text-right", !!errors.name && "text-rose-500")}
          >
            Имя*
          </Label>
          <Input
            {...register("name", { required: true })}
            id='name'
            placeholder='Введите имя'
            className='col-span-3'
            invalid={!!errors.name}
          />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label
            htmlFor='phone'
            className={cn("text-right", !!errors.phone && "text-rose-500")}
          >
            Телефон*
          </Label>
          <Input
            {...register("phone", { pattern: regExp, required: true })}
            id='phone'
            placeholder='Введите телефон'
            className='col-span-3'
            invalid={!!errors.phone}
            inputMode='tel'
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={disabled}
          size='lg'
          type='submit'
        >
          Отправить**
        </Button>
      </DialogFooter>
    </>
  );
};

export default ModalForm;
