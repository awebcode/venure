"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";



export function SearchComponent() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const router = useRouter();

  return (
    <div className="w-full mx-auto flex flex-col  px-4">
      {/* Search Container */}
      {/* Filters Positioned at the Top Left */}
     
      <div className="w-full  p-2 px-4 bg-white rounded-lg md:rounded-full shadow-lg">
        {/* Search Box */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Location Input */}
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500 font-medium mb-1 ml-2">Location</span>
            <div className="relative">
              <Input placeholder="Search destinations" className="w-full pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          <Separator className="hidden md:flex h-8 mt-5 w-[1px] bg-gray-300" />

          {/* Date Picker */}
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500 font-medium mb-1 ml-2">Date</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    !date && "text-muted-foreground"
                  }`}
                >
                  {date ? date.toDateString() : "From and To"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <Separator className="hidden md:flex h-8 mt-5 w-[1px] bg-gray-300" />

          {/* Event Type Dropdown */}
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500 font-medium mb-1 ml-2">
              Event Type
            </span>
            <Select>
              <SelectTrigger className="bg-transparent">
                <SelectValue placeholder="Type of Event" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="birthday">Birthday</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button
            onClick={() => router.push("/search")}
            className="w-full md:w-10 h-10 mt-3  bg-primaryOrange hover:bg-primaryOrange/90 text-white rounded-full flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
            <span className="md:sr-only mr-2 inline-block">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
