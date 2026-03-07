"use client"

import { useParams } from "next/navigation";
import { RESTAURANTS, MenuItem } from "@/lib/data";
import { Star, Clock, Info, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = RESTAURANTS.find(r => r.id === id);
  const { addToCart, updateQuantity, cart } = useCart();
  const { toast } = useToast();

  if (!restaurant) return <div className="p-12 text-center">Restaurant not found</div>;

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} from ${restaurant.name}`,
    });
  };

  const getQty = (itemId: string) => {
    return cart.find(i => i.id === itemId)?.quantity || 0;
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">{restaurant.cuisine}</p>
          </div>
          <div className="rounded-lg border p-2 text-center shadow-sm">
            <div className="flex items-center justify-center gap-1 text-primary font-bold">
              <Star className="h-4 w-4 fill-current" />
              <span>{restaurant.rating}</span>
            </div>
            <Separator className="my-1.5" />
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">1K+ ratings</div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center gap-6 text-sm font-bold text-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-normal">₹</span>
            <span>{restaurant.costForTwo} for two</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground">
          <Info className="h-4 w-4 text-primary" />
          <span>Food Fetch is committed to high quality hygiene and delivery protocols.</span>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Menu Section */}
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Recommended</h2>
          <div className="divide-y">
            {restaurant.menu.map((item) => (
              <div key={item.id} className="flex gap-6 py-8">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`h-4 w-4 border-2 flex items-center justify-center rounded-sm ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                    </div>
                    {item.rating && (
                      <span className="text-xs font-bold text-accent">★ Bestseller</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm font-semibold">₹{item.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                </div>
                
                <div className="relative h-28 w-28 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="h-full w-full rounded-lg object-cover" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    {getQty(item.id) > 0 ? (
                      <div className="flex items-center gap-3 rounded border bg-white px-3 py-1 shadow-md">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-primary font-bold">-</button>
                        <span className="text-sm font-bold min-w-[12px] text-center">{getQty(item.id)}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-primary font-bold">+</button>
                      </div>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary/5 shadow-md bg-white font-bold"
                        onClick={() => handleAdd(item)}
                      >
                        ADD
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
