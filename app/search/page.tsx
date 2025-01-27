"use client";

import * as React from "react";

import { SearchHeader } from "./_components/search-header";
import { VenueFilters } from "./_components/venue-filters";
import { VenueResults } from "./_components/venue-results";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { DefaultCardPlaceHolderImage } from "@/constants/data";
import { VenueResultsPagination } from "./_components/venue-results-pagination";

export default function SearchResults() {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="mb-8">
        <SearchHeader
          resultCount={10}
          searchTerm="Venue"
          onSortChange={(value) => console.log(value)}
          onTabChange={(value) => console.log(value)}
        />
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8">
        {/* Filters */}
        <div>
          <VenueFilters onFilterChange={(filters) => console.log(filters)} />
        </div>

        {/* Results */}
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
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Grand Ballroom</h3>
                        <p className="text-muted-foreground">Shangri-La, Bangkok</p>
                        <p className="text-sm text-muted-foreground">Hotel</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
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
                  <VenueResultsPagination/>
          {/* <VenueResults venues={[]} isLoading={false} /> */}
        </div>
      </div>
    </div>
  );
}
