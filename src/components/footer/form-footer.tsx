import PromptForm from "@/components/action-forms/prompt-form";

const FormFooter = () => {
  return (
    <div className='mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1'>
      <h3 className='text-sm font-medium text-gray-900'>
        Форма обратной связи
      </h3>
      <p className='mt-6 text-sm'>
        Оставьте номер если есть вопрос Мы свяжемся в течении пяти минут.
      </p>
      <PromptForm />
    </div>
  );
};

export default FormFooter;
