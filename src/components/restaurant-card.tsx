import Link from "next/link";
import { Star, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Restaurant } from "@/lib/data";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <Card className="group overflow-hidden border-none transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-bold text-primary backdrop-blur-sm">
            ₹{restaurant.costForTwo} for two
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className="text-lg font-bold text-foreground line-clamp-1">{restaurant.name}</h3>
          <div className="mt-1 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 rounded bg-primary/10 px-1.5 py-0.5 text-primary">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-xs font-bold">{restaurant.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">•</span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span className="text-xs">{restaurant.deliveryTime}</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{restaurant.cuisine}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
