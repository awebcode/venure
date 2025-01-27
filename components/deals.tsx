import React from "react";
import { Button } from "./ui/button";
import { CommonCard } from "./common/common-card";
import type { VenueCardProps } from "@/types/search";

const DealsVenues = ({ venues }: { venues: VenueCardProps[] }) => {
  return (
    <section className="py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Deals Venue</h3>
          <Button>VIEW MORE</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue, index) => (
            <CommonCard key={index} {...venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsVenues;
