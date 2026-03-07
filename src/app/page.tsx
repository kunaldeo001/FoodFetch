import { CATEGORIES, RESTAURANTS } from "@/lib/data";
import { RestaurantCard } from "@/components/restaurant-card";
import { Recommendations } from "@/components/recommendations";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Categories Scroller */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What's on your mind?</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORIES.map((cat, i) => (
            <div key={cat} className="flex flex-col items-center gap-2 min-w-[100px] cursor-pointer group">
              <div className="h-24 w-24 rounded-full overflow-hidden bg-muted group-hover:shadow-md transition-shadow">
                <img 
                  src={`https://picsum.photos/seed/${cat}/200/200`} 
                  alt={cat} 
                  className="h-full w-full object-cover transition-transform group-hover:scale-110" 
                />
              </div>
              <span className="text-sm font-medium text-center group-hover:text-primary">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AI Recommendations */}
      <Recommendations />

      {/* Main Restaurant Listing */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Restaurants with online delivery</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">Ratings 4.0+</Button>
            <Button variant="outline" size="sm" className="rounded-full">Pure Veg</Button>
            <Button variant="outline" size="sm" className="rounded-full">Price</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {RESTAURANTS.map((resto) => (
            <RestaurantCard key={resto.id} restaurant={resto} />
          ))}
          {/* Duplicating for filler */}
          {RESTAURANTS.map((resto) => (
            <RestaurantCard key={`${resto.id}-dup`} restaurant={resto} />
          ))}
        </div>
      </section>
    </div>
  );
}
