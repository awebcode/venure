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

export function SearchComponent() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="grid gap-4 p-4 bg-white rounded-lg shadow-lg md:grid-cols-4">
      <div className="relative">
        <Input placeholder="Search destinations" className="w-full pl-10" />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>
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
      <Button className="w-full bg-evenure-blue text-white hover:bg-blue-600">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </div>
  );
}
