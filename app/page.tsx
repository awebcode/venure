import { Categories } from "@/components/common/categories";
import { Navbar } from "@/components/common/navbar";
import { SearchComponent } from "@/components/common/search-component";
import { Newsletter } from "@/components/common/news-letter";
import { Footer } from "@/components/common/footer";
import RecommendedVenues from "@/components/recommended-venues";
import TopRatedVenues from "@/components/TopRated";
import NearYouVenues from "@/components/nearyou-venues";
import DealsVenues from "@/components/deals";
import { AdvertisementBanner } from "@/components/common/advertisement-banner";
import { VenueConsultation } from "@/components/common/venue-consultsition";
import { DefaultCardPlaceHolderImage } from "@/constants/data";

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
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-evenure-blue text-white px-4 py-12 md:py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Book your Venue</h2>
            <p className="text-lg opacity-90">
              Search for venues to host your best events
            </p>
          </div>

          <SearchComponent />
        </div>
      </section>

      <Categories />

      {/* Recommended Venues */}
      <RecommendedVenues venues={venues} />
      <TopRatedVenues venues={venues} />
      <VenueConsultation />
      <NearYouVenues venues={venues} />
      <AdvertisementBanner />
      <DealsVenues venues={venues} />

      <Newsletter />
      <Footer />
    </main>
  );
}
