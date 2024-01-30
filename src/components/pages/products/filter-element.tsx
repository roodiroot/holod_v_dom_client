"use client";

import React, { memo } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  list: { name: string; value: string | number }[];
  value: any[];
  setValue: (value: any) => void;
}

const FilterElement: React.FC<FilterElementProps> = ({
  title,
  list,
  value,
  setValue,
  ...props
}) => (
  <fieldset {...props}>
    <legend className='block text-sm font-medium text-gray-900'>{title}</legend>
    <div className='pt-6 space-y-3'>
      {list &&
        list?.map((i) => (
          <div key={i.name} className='flex items-center space-x-3'>
            <Checkbox
              checked={value.includes(i.value)}
              onCheckedChange={(e) => {
                if (e) {
                  setValue(
                    (state: any) =>
                      !state?.includes(i.value) && [...state, i.value]
                  );
                } else {
                  setValue((state: string[]) =>
                    state.filter((j) => j !== i.value)
                  );
                }
              }}
              id={`${i.value}`}
            />
            <label
              htmlFor={`${i.value}`}
              className='text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {i.name}
            </label>
          </div>
        ))}
    </div>
  </fieldset>
);

export default memo(FilterElement);
