import Link from "next/link";

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
        {list ? (
          list.map((i) => (
            <li key={i.link}>
              <Link href={i.link}>{i.title}</Link>
            </li>
          ))
        ) : (
          <>
            <div>
              <h3 className='font-semibold text-gray-900'>Консультация:</h3>
              <div className='mt-2'>
                <p>
                  Телефон:{" "}
                  <span className='whitespace-nowrap'>+7 (XXX) XXX-XX-XX</span>
                </p>
                <p>
                  Email:{" "}
                  <span className='whitespace-nowrap'>info@holodvdom.ru</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900'>Логистика:</h3>
              <div className='mt-2'>
                <p>
                  Телефон:{" "}
                  <span className='whitespace-nowrap'>+7 (XXX) XXX-XX-XX</span>
                </p>
                <p>
                  Email:{" "}
                  <span className='whitespace-nowrap'>info@holodvdom.ru</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900'>Соцсети:</h3>
              <div className='mt-2'>
                <p>
                  Телеграм:{" "}
                  <span className='whitespace-nowrap'>@holod_v_dom</span>
                </p>
                <p>
                  Whatsapp:{" "}
                  <span className='whitespace-nowrap'>+7 (XXX) XXX-XX-XX</span>
                </p>
              </div>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default ListLinkFooter;
