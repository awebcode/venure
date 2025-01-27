"use client";

import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchHeaderProps {
  resultCount: number;
  searchTerm: string;
  onSortChange: (value: string) => void;
  onTabChange: (value: string) => void;
}

export function SearchHeader({
  resultCount,
  searchTerm,
  onSortChange,
  onTabChange,
}: SearchHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold mb-2">
        {resultCount} Results for {searchTerm} found
      </h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Tabs
          defaultValue="listings"
          className="w-full sm:w-[400px]"
          onValueChange={onTabChange}
        >
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="listings" className="flex-1 sm:flex-none">
              Listings
            </TabsTrigger>
            <TabsTrigger value="packages" className="flex-1 sm:flex-none">
              Packages
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by: Our top picks" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">Our top picks</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
