import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Receive the latest update on
          <br />
          the best offers!
        </h2>
        <p className="text-gray-600">
          Join our newsletter, and receive the latest news on
          <br />
          the best deals on Evenure
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input type="email" placeholder="Your email address" className="flex-1" />
          <Button type="submit" >
            Button
          </Button>
        </form>
      </div>
    </section>
  );
}
