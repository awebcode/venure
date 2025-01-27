"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

interface SearchResultsHeaderProps {
  onSortChange: (value: string) => void;
  onTabChange: (value: string) => void;
}

export function SearchResultsHeader({
  onSortChange,
  onTabChange,
}: SearchResultsHeaderProps) {
  return (
    <div className="w-full my-2">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Sort Dropdown */}
        <div className="w-full sm:w-auto">
          <Select onValueChange={onSortChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue
                placeholder={
                  <div className="flex items-center text-xs">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <span>Sort by: Our top picks</span>
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Our top picks</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tabs */}
        <div className="w-full sm:w-auto">
          <Tabs defaultValue="listings" onValueChange={onTabChange}>
            <TabsList className="flex w-full sm:w-auto">
              <TabsTrigger value="listings" className="flex-1 sm:flex-none">
                Listings
              </TabsTrigger>
              <TabsTrigger value="packages" className="flex-1 sm:flex-none">
                Packages
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
