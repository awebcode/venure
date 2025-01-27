import { Button } from "@/components/ui/button";

export function VenueConsultation() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Need venue consultation?
        </h2>
        <p className="text-gray-600">
          Reach out to us for free venue
          <br />
          consultation for your perfect event.
        </p>
        <form className="flex flex-col max-w-md mx-auto">
          <Button type="submit" className="w-fit mx-auto">
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
}
