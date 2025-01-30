"use client";
import { Categories } from "@/components/common/categories";
import { Newsletter } from "@/components/common/news-letter";
import { Footer } from "@/components/common/footer";

import { AdvertisementBanner } from "@/components/common/advertisement-banner";
import { VenueConsultation } from "@/components/common/venue-consultsition";
import { DefaultCardPlaceHolderImage } from "@/constants/data";
import { Navbar } from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import SliderSection from "@/components/common/SliderSection";
import { CommonCard } from "@/components/common/common-card";

const venues = [
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
  {
    title: "This is a heading",
    subtitle: "This is a subtitle",
    imageUrl: DefaultCardPlaceHolderImage,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar>
        {" "}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue-foreground">
              Book your Venue
            </h2>
            <p className="text-lg opacity-90">
              Search for venues to host your best events
            </p>
          </div>
          <div className="max-w-4xl mx-auto p-8 py-2 md:pl-8 flex flex-wrap gap-2 md:gap-2 mb-2">
            <Button size="sm" variant="outline" className="rounded-full w-full md:w-auto">
              Venues
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full bg-transparent border-foreground w-full md:w-auto"
            >
              Packages
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full bg-transparent border-foreground w-full md:w-auto"
            >
              Food and Beverages Only
            </Button>
          </div>
        </div>{" "}
      </Navbar>

      {/* Hero Section */}
      {/* <section className="relative bg-primaryBlue text-primaryBlue-foreground text-foreground px-4 md:rounded-bl-[120px] md:rounded-br-[120px] ">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue-foreground">
              Book your Venue
            </h2>
            <p className="text-lg opacity-90">
              Search for venues to host your best events
            </p>
          </div>
          <SearchComponent showFiltersButtons />
        </div>
      </section> */}

      <Categories />

      {/* Recommended Venues */}
      <SliderSection
        title="Recommended Venues"
        subtitle="Find the best venues for your events"
        items={venues}
        renderItem={(venue) => <CommonCard {...venue} />}
      />
      {/* Top Rated */}
      <SliderSection
        title="Top Rated Venue"
        subtitle="Find the best venues for your events"
        items={venues}
        renderItem={(venue) => <CommonCard {...venue} />}
      />
      <VenueConsultation />
      {/* Near You Venues */}
      <SliderSection
        title="Near You Venue"
        subtitle="Find the best venues for your events"
        items={venues}
        renderItem={(venue) => <CommonCard {...venue} />}
      />
      <AdvertisementBanner />
      {/* Deals */}
      <SliderSection
        title="Deals Venue"
        subtitle="Find the best venues for your events"
        items={venues}
        renderItem={(venue) => <CommonCard {...venue} />}
      />

      <Newsletter />
      <Footer />
    </main>
  );
}
