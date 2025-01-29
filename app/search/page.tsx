"use client";

import * as React from "react";

import { SearchHeader } from "./_components/search-header";
import { VenueFilters } from "./_components/venue-filters";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Star, Users } from "lucide-react";
import { DefaultCardPlaceHolderImage } from "@/constants/data";
import { VenueResultsPagination } from "./_components/venue-results-pagination";
import { SearchComponent } from "@/components/common/search-component";
import { SearchResultsHeader } from "./_components/search-results-header";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Footer } from "@/components/common/footer";
import { Newsletter } from "@/components/common/news-letter";
import { Badge } from "@/components/ui/badge";

export default function SearchResults() {
  return (
    <>
      {" "}
      <section className="relative w-screen min-h-[45px] flex items-center justify-center bg-primaryBlue text-primaryBlue-foreground text-foreground px-4 rounded-bl-[60px] rounded-br-[60px]">
        {/* Search Component Positioned Half Outside */}
        {/* The background color of the section could be adjusted if needed */}
        <div className="md:absolute flex justify-center items-center mx-auto transform top-[15%] left-0 right-0">
          <SearchComponent showFiltersButtons={false} />
        </div>
      </section>
      <div className="container mx-auto p-4 lg:p-8">
        <div className="mb-8 ">
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
          <Card className="w-full p-4">
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
                            <p className="text-muted-foreground flex items-center">
                              <MapPin className="w-4 h-4 mr-2" /> Bangkok, Thailand
                            </p>{" "}
                            <p className="text-sm text-muted-foreground">Hotel</p>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Heart className="w-5 h-5" />
                          </Button>
                        </div>
                        <Card className="w-full flex items-center justify-between gap-4 mt-4 md:absolute bottom-2 right-0 p-2">
                          <div className="flex items-center gap-1">
                            <div className="flex flex-col ">
                              <div className="ml-2 mb-2 flex  gap-1">
                                <Users className="w-4 h-4" />

                                <p className="text-sm text-gray-500"> 120-1000</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button className="btn-primary-orange text-white">
                                  <Star className="w-4 h-4 " />
                                  <span className="text-sm">4.8</span>
                                </Button>
                                <span className="text-sm text-muted-foreground">
                                  (2,228 Reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end text-sm">
                            <Badge variant={"destructive"}>50% Off</Badge>
                            <span className="text-muted-foreground line-through">THB 120,000</span>
                            <span className="font-semibold">THB 120,000</span>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <VenueResultsPagination />
            </div>

            {/* <VenueResults venues={[]} isLoading={false} /> */}
          </Card>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
