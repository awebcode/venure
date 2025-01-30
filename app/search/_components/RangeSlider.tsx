"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";

interface RangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min: number;
  max: number;
  step?: number;
  label: string;
  unit?: string;
}

export function RangeSlider({
  value,
  onChange,
  min,
  max,
  step = 1,
  label,
  unit = "",
}: RangeSliderProps) {
  return (
    <div className="w-full">
      <h4 className="text-sm font-medium mb-2">{label}</h4>
      <SliderPrimitive.Root
        className="relative flex w-full select-none items-center"
        value={value}
        onValueChange={(val) => onChange(val as [number, number])}
        min={min}
        max={max}
        step={step}
      >
        <SliderPrimitive.Track className="relative h-1 w-full bg-gray-300 rounded-full">
          <SliderPrimitive.Range className="absolute h-full bg-black rounded-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="h-5 w-5 bg-black rounded-full shadow-md transition-all hover:scale-110 focus:outline-none" />
        <SliderPrimitive.Thumb className="h-5 w-5 bg-black rounded-full shadow-md transition-all hover:scale-110 focus:outline-none" />
      </SliderPrimitive.Root>
      <div className="text-sm mt-1 text-gray-700">
        {value[0]} {unit} - {value[1]} {unit}
      </div>
    </div>
  );
}
