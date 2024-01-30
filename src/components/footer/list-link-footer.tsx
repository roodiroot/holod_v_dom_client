interface ListLinkFooterProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  list?: { title: string; link: string }[];
}
const ListLinkFooter: React.FC<ListLinkFooterProps> = ({
  title,
  list,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className='text-sm font-medium text-gray-900'>{title}</h3>
      <ul className='mt-6 text-sm space-y-6'>
        <li>
          <a href=''>Сплит системы</a>
        </li>
        <li>
          <a href=''>Мульти сплит системы</a>
        </li>
        <li>
          <a href=''>Внутренние блоки</a>
        </li>
        <li>
          <a href=''>Внешние блоки</a>
        </li>
      </ul>
    </div>
  );
};

export default ListLinkFooter;
