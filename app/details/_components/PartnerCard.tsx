import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Music, Utensils } from "lucide-react"; // Assuming lucide-react is installed
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
export enum PartnerTypeEnum {
  Photographer = "photographer",
  DJ = "dj",
  Catering = "catering",
}
interface PartnerCardProps {
  name: string;
  type: PartnerTypeEnum;
  rating: number;
}

const icons = {
  photographer: Camera,
  dj: Music,
  catering: Utensils,
};

export const PartnerCard = ({ name, type }: PartnerCardProps) => {
  const Icon = icons[type]; // Dynamically select the icon based on 'type'

  return (
    <Card className="w-full bg-white">
      <CardContent className="flex items-center justify-between p-3">
        <div>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 bg-gray-100">
              <AvatarFallback className="bg-gray-100">
                <Icon className="h-4 w-4 text-gray-500" />
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{name}</span>
          </div>
          <p className="text-xs text-gray-500">Type {type}</p>
        </div>
        <Button className="h-7 px-4 text-xs font-medium bg-[#FF9900] hover:bg-[#FF9900]/90 text-white">
          ADD
        </Button>
      </CardContent>
    </Card>
  );
};
