interface TitleBlockProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  description: string;
}

const TitleBlock: React.FC<TitleBlockProps> = ({
  title,
  description,
  ...props
}) => {
  return (
    <div {...props} className='border-b border-gray-200 pb-10 pt-24'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
        {title}
      </h1>
      <p className='mt-4'>{description}</p>
    </div>
  );
};

export default TitleBlock;
