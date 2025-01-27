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
interface SearchComponentProps {
  showFiltersButtons?: boolean;
}
export function SearchComponent({ showFiltersButtons }: SearchComponentProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="max-w-[1177px]">
      {/* Button Group */}
      {showFiltersButtons && (
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4">
          <Button variant="outline" className="rounded-full w-full md:w-auto">
            Venues
          </Button>
          <Button
            variant="outline"
            className="rounded-full bg-transparent border-foreground w-full md:w-auto"
          >
            Packages
          </Button>
          <Button
            variant="outline"
            className="rounded-full bg-transparent border-foreground w-full md:w-auto"
          >
            Food and Beverages Only
          </Button>
        </div>
      )}

      {/* Search Section */}
      <div className="grid gap-2 md:gap-4 p-4 bg-white rounded-lg md:rounded-full shadow-lg grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto]">
        {/* Destination Input */}
        <div className="relative">
          <Input placeholder="Search destinations" className="w-full pl-10" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Date Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-start text-left font-normal ${
                !date && "text-muted-foreground"
              }`}
            >
              {date ? date.toDateString() : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>

        {/* Event Type Dropdown */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Type of Event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="birthday">Birthday</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button
          size="icon"
          className="w-full md:w-10  bg-primaryOrange hover:bg-primaryOrange/90 text-white"
        >
          <Search className="w-5 h-5" />
          <span className="block md:hidden">Search</span>
        </Button>
      </div>
    </div>
  );
}
