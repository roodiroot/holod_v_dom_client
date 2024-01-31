"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SliderCardThumb from "./slider-card-thumb";

interface SliderCardProductProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: string[];
}

const SliderCardProduct: React.FC<SliderCardProductProps> = ({ list }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (api) {
      setCurrent(api.selectedScrollSnap());
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <div className='w-full h-full '>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className='w-full h-full cursor-pointer'
      >
        <CarouselContent>
          {list.map((i, index) => (
            <CarouselItem key={index}>
              <div className='relative aspect-square w-full h-full p-4  overflow-hidden'>
                <div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/${i}`}
                    alt={`${i}_logo`}
                    className='h-full w-full object-cover object-center'
                    width={300}
                    height={300}
                  />
                  <span className='absolute inset-0 bg-gray-200/30'></span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <SliderCardThumb
        className='absolute bottom-0 left-1/2 -translate-x-1/2'
        list={list}
        current={current}
      />
    </div>
  );
};

export default SliderCardProduct;
