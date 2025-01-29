import React from "react";
import { Button } from "@/components/ui/button"; // Assuming the Button component is imported
import { PartnerCard, type PartnerTypeEnum } from "./PartnerCard"; // Assuming PartnerCard is imported

const partnersData = [
  { name: "Divine Events", type: "catering", rating: 4.8 },
  { name: "DJ Sajan", type: "dj", rating: 4.5 },
  { name: "SnapPro", type: "photographer", rating: 4.9 },
  { name: "Taste Masters", type: "catering", rating: 4.7 },
  { name: "Party Beats", type: "dj", rating: 4.6 },
  { name: "Capture Moments", type: "photographer", rating: 4.8 },
  { name: "Flavors Feast", type: "catering", rating: 4.5 },
  { name: "SoundWave", type: "dj", rating: 4.3 },
];

const Partners = () => {
  return (
    <div id="Partners">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm md:text-xl font-semibold">Powered by our trusted partners</h2>
        <Button variant="outline">SHOW ALL</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {partnersData.map((partner, index) => (
          <PartnerCard
            key={index}
            name={partner.name}
            type={partner.type as PartnerTypeEnum}
            rating={partner.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
