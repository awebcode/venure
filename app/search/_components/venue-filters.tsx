"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import type { VenueFilter } from "@/types/search";

interface VenueFiltersProps {
  onFilterChange: (filters: VenueFilter) => void;
}

export function VenueFilters({ onFilterChange }: VenueFiltersProps) {
  const [filters, setFilters] = useState<VenueFilter>({
    setting: null,
    attendees: 200,
    spaceSize: 150,
    features: [],
    priceRange: 10000,
    rating: 4,
    adjustableSpace: true,
  });

  const features = ["Projector", "Pool", "Stage", "Sound System", "Catering", "Parking"];

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const updateFilter = (key: keyof VenueFilter, value: VenueFilter[keyof VenueFilter]) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleFeature = (feature: string) => {
    setFilters((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-sm md:text-xl mb-4">Filter By:</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Setting</h4>
            <div className="flex flex-wrap gap-2">
              {["INDOOR", "OUTDOOR", "HYBRID"].map((setting) => (
                <Button
                  key={setting}
                  variant={filters.setting === setting ? "default" :setting==="INDOOR"&& filters.setting===null? "default" : "outline"}
                  size="sm"
                  onClick={() => updateFilter("setting", setting as VenueFilter["setting"])}
                >
                  {setting}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Number of Attendees</h4>
            <Slider
              value={[filters.attendees]}
              onValueChange={([value]) => updateFilter("attendees", value)}
              max={1000}
              step={10}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground mt-1">
              {filters.attendees} attendees
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Space Size</h4>
            <Slider
              value={[filters.spaceSize]}
              onValueChange={([value]) => updateFilter("spaceSize", value)}
              max={500}
              step={10}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground mt-1">
              {filters.spaceSize} sq
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Features</h4>
            <div className="space-y-2">
              {features.slice(0, 3).map((feature) => (
                <label key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    checked={filters.features.includes(feature)}
                    onCheckedChange={() => toggleFeature(feature)}
                  />
                  <span>{feature}</span>
                </label>
              ))}
            </div>
            <Button variant="link" className="text-sm p-0 h-auto mt-2">
              SHOW MORE
            </Button>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Price Range</h4>
            <Slider
              value={[filters.priceRange]}
              onValueChange={([value]) => updateFilter("priceRange", value)}
              max={100000}
              step={1000}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground mt-1">
              THB {filters.priceRange.toLocaleString()}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Rating</h4>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Star
                  key={rating}
                  className="w-4 h-4 cursor-pointer"
                  fill={rating <= filters.rating ? "#facc15" : "none"}
                  onClick={() => updateFilter("rating", rating)}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Adjustable Space</h4>
            <div className="flex gap-2">
              <Button
                variant={filters.adjustableSpace ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilter("adjustableSpace", true)}
              >
                YES
              </Button>
              <Button
                variant={!filters.adjustableSpace ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilter("adjustableSpace", false)}
              >
                NO
              </Button>
            </div>
          </div>

          <Button className="w-full" onClick={() => onFilterChange(filters)}>
            FILTER
          </Button>
        </div>
      </div>
    </div>
  );
}
