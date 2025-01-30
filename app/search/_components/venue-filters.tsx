"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface VenueFilter {
  setting: "INDOOR" | "OUTDOOR" | "HYBRID" | null;
  attendees: [number, number];
  spaceSize: [number, number];
  features: string[];
  priceRange: [number, number];
  rating: [number, number];
  adjustableSpace: boolean;
}

interface VenueFiltersProps {
  onFilterChange: (filters: VenueFilter) => void;
}

export function VenueFilters({ onFilterChange }: VenueFiltersProps) {
  const [filters, setFilters] = useState<VenueFilter>({
    setting: null,
    attendees: [50, 200],
    spaceSize: [30, 150],
    features: [],
    priceRange: [100, 10000],
    rating: [2, 5],
    adjustableSpace: true,
  });

  const features = [
    "Projector",
    "Pool",
    "Stage",
    "Sound System",
    "Catering",
    "Parking",
    "WiFi",
    "Lighting",
  ];

  const [showAllFeatures, setShowAllFeatures] = useState(false);

  useEffect(() => {
    // Uncomment the line below if you want to trigger onFilterChange every time filters change
    //onFilterChange(filters)
  }, [filters]);

  const updateFilter = (
    key: keyof VenueFilter,
    value: VenueFilter[keyof VenueFilter]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold text-sm md:text-xl mb-4">Filter By:</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm text-gray-600 font-medium mb-4">Setting</h4>
            <div className="flex flex-wrap gap-1">
              {" "}
              {["INDOOR", "OUTDOOR", "HYBRID"].map((setting) => (
                <Button
                  size="sm"
                  key={setting}
                  variant={
                    filters.setting === setting
                      ? "default"
                      : setting === "INDOOR" && filters.setting === null
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    updateFilter("setting", setting as VenueFilter["setting"])
                  }
                >
                  {" "}
                  {setting}{" "}
                </Button>
              ))}{" "}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-600 font-medium mb-4">
              Number of Attendees
            </h4>
            <Slider
              defaultValue={filters.attendees}
              max={1000}
              step={10}
              onValueChange={(value) =>
                updateFilter("attendees", value as [number, number])
              }
              className="w-full"
            />
            <div className="text-sm text-muted-foreground mt-2">
              {filters.attendees[0]} - {filters.attendees[1]} attendees
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-600 font-medium mb-4">Space Size</h4>
            <Slider
              defaultValue={filters.spaceSize}
              max={500}
              step={10}
              onValueChange={(value) =>
                updateFilter("spaceSize", value as [number, number])
              }
              className="w-full"
            />
            <div className="text-sm text-muted-foreground mt-2">
              {filters.spaceSize[0]} - {filters.spaceSize[1]} sq
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-600 font-medium mb-4">Price Range</h4>
            <Slider
              defaultValue={filters.priceRange}
              max={10000}
              step={100}
              onValueChange={(value) =>
                updateFilter("priceRange", value as [number, number])
              }
              className="w-full"
            />
            <div className="text-sm text-muted-foreground mt-2">
              THB {filters.priceRange[0].toLocaleString()} - THB{" "}
              {filters.priceRange[1].toLocaleString()}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-600 font-medium mb-4">Features</h4>
            <div className="space-y-2">
              {(showAllFeatures ? features : features.slice(0, 3)).map((feature) => (
                <label key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    checked={filters.features.includes(feature)}
                    onCheckedChange={() => {
                      setFilters((prev) => ({
                        ...prev,
                        features: prev.features.includes(feature)
                          ? prev.features.filter((f) => f !== feature)
                          : [...prev.features, feature],
                      }));
                    }}
                  />
                  <span>{feature}</span>
                </label>
              ))}
            </div>
            <Button
              variant="link"
              className="text-sm p-0 h-auto mt-2"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
            >
              {showAllFeatures ? "SHOW LESS" : "SHOW MORE"}
            </Button>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm text-gray-600 font-medium">Rating</h4>
              <Button variant="outline" className="flex items-center gap-x-2">
                <Star className="w-4 h-4" />
                <span className="text-muted-foreground">{filters.rating[0]} - 5</span>
              </Button>
            </div>
            <Slider
              defaultValue={filters.rating}
              max={5}
              step={0.1}
              onValueChange={(value) =>
                updateFilter("rating", value as [number, number])
              }
              className="w-full"
            />
          </div>

          <div>
            <h4 className="text-sm text-gray-600 font-medium mb-4">Adjustable Space</h4>
            <div className="flex gap-2">
              <Button
                variant={filters.adjustableSpace ? "default" : "outline"}
                onClick={() => updateFilter("adjustableSpace", true)}
                className="w-full"
              >
                YES
              </Button>
              <Button
                variant={!filters.adjustableSpace ? "default" : "outline"}
                onClick={() => updateFilter("adjustableSpace", false)}
                className="w-full"
              >
                NO
              </Button>
            </div>
          </div>

          <Button className="w-full" onClick={() => onFilterChange(filters)}>
            FILTER
          </Button>
        </div>
      </Card>
    </div>
  );
}
