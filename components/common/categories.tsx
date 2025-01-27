import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  CrownIcon as Luxury,
  Home,
  Music,
  Building2,
  Trees,
  Warehouse,
  Building,
  Tent,
  Hotel,
  Landmark,
  StickerIcon as Stadium,
  Wine,
} from "lucide-react";

const categories = [
  { icon: Luxury, label: "Luxury" },
  { icon: Home, label: "Plaza" },
  { icon: Music, label: "Concert Hall" },
  { icon: Building2, label: "Outdoor" },
  { icon: Trees, label: "Nightclub" },
  { icon: Warehouse, label: "Rooftop" },
  { icon: Building, label: "Hotel" },
  { icon: Tent, label: "Open Field" },
  { icon: Hotel, label: "Square" },
  { icon: Landmark, label: "Clubhouse" },
  { icon: Stadium, label: "Sports" },
  { icon: Wine, label: "Restaurant" },
  { icon: Warehouse, label: "Rooftop" },
  { icon: Building, label: "Hotel" },
  { icon: Tent, label: "Open Field" },
  { icon: Hotel, label: "Square" },
  { icon: Landmark, label: "Clubhouse" },
  { icon: Stadium, label: "Sports" },
  { icon: Wine, label: "Restaurant" },
];

export function Categories() {
  return (
    <section className="py-8 px-4 md:px-6">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center p-4 h-auto"
              >
                <Icon className="w-6 h-6 mb-2 text-evenure-blue" />
                <span className="text-sm">{category.label}</span>
              </Button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
