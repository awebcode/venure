"use client";

import * as React from "react";

import { SearchHeader } from "./_components/search-header";
import { VenueFilters } from "./_components/venue-filters";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { DefaultCardPlaceHolderImage } from "@/constants/data";
import { VenueResultsPagination } from "./_components/venue-results-pagination";
import { SearchComponent } from "@/components/common/search-component";
import { SearchResultsHeader } from "./_components/search-results-header";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function SearchResults() {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <SearchComponent showFiltersButtons={false} />
      <div className="mb-8">
        <SearchHeader resultCount={1280} searchTerm="Venue" />
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8">
        {/* Filters */}
        <div>
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  <Star className="w-4 h-4 mr-2" />
                  Show Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[85%]">
                <VenueFilters onFilterChange={(filters) => console.log(filters)} />
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:block">
            <VenueFilters onFilterChange={(filters) => console.log(filters)} />
          </div>
        </div>

        {/* Results */}
        <div className="w-full">
          <SearchResultsHeader
            onSortChange={(value) => console.log(value)}
            onTabChange={(value) => console.log(value)}
          />
          <div className="grid gap-6">
            {[1, 2, 3, 4].map((venue) => (
              <Card key={venue} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[300px_1fr] gap-4">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={DefaultCardPlaceHolderImage}
                        alt="Venue image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full p-6 relative">
                      <div className="w-full flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">Grand Ballroom</h3>
                          <p className="text-muted-foreground">Shangri-La, Bangkok</p>
                          <p className="text-sm text-muted-foreground">Hotel</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Heart className="w-5 h-5" />
                        </Button>
                      </div>
                      <div className="w-full flex items-center justify-between gap-4 mt-4 absolute bottom-2 right-0 p-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">4.8</span>
                          <span className="text-sm text-muted-foreground">
                            (2,228 Reviews)
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold">THB 120,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <VenueResultsPagination />
          </div>

          {/* <VenueResults venues={[]} isLoading={false} /> */}
        </div>
      </div>
    </div>
  );
}
