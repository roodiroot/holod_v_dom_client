"use client";

import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { sendMessage } from "@/lib/send-message";
import InputPhoneMask from "../ui/input-phone-mask";
import useGeoLocation from "@/hooks/use-geolokation";

type InputsPropmptForm = {
  phone: string;
};

const PromptForm = () => {
  const [disabled, setDisabled] = useState(false);
  const { city } = useGeoLocation();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsPropmptForm>();

  const onSubmit: SubmitHandler<InputsPropmptForm> = (data) => {
    setDisabled(true);
    sendMessage({
      ...data,
      text: "Быстрая форма обратной связи",
      city: city || "undefined",
    })
      .then((d) => {
        if (!d) return;
        setDisabled(false);
        reset({
          phone: "",
        });
        //@ts-ignore
        ym(96992027, "reachGoal", "prompt_form");
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-2 flex sm:max-w-md"
    >
      <Controller
        name="phone"
        control={control}
        rules={{
          required: true,
          pattern: regExp,
        }}
        render={({ field: { value, onChange } }) => (
          <InputPhoneMask
            className="col-span-3"
            value={value}
            setValue={onChange}
            invalide={!!errors.phone}
          />
        )}
      />
      <div className="ml-4 shrink-0">
        <Button disabled={disabled} onClick={handleSubmit(onSubmit)}>
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default PromptForm;
