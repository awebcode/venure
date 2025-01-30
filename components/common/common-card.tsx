import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CommonCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function CommonCard({ title, subtitle, imageUrl }: CommonCardProps) {
  return (
    <Card className="overflow-hidden w-full">
      <div className="aspect-video relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardFooter>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardFooter>
    </Card>
  );
}
