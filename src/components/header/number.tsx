"use client";

import useGeoLocation from "@/hooks/use-geolokation";

interface NumberPhoneProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
const NumberPhone: React.FC<NumberPhoneProps> = ({ ...props }) => {
  const { city } = useGeoLocation();
  return (
    <a
      href={`tel:${
        city?.toLowerCase() === "penza" ? "+77777777777" : "+79050096888"
      }`}
      {...props}
    >
      {city?.toLowerCase() === "penza"
        ? "+7 (777) 777 77 77"
        : "+7 (905) 009 68 88"}
    </a>
  );
};

export default NumberPhone;
