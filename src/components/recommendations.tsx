"use client"

import { useEffect, useState } from "react";
import { receivePersonalizedRecommendations, ReceivePersonalizedRecommendationsOutput } from "@/ai/flows/receive-personalized-recommendations";
import { RestaurantCard } from "./restaurant-card";
import { RESTAURANTS } from "@/lib/data";
import { Sparkles } from "lucide-react";

export function Recommendations() {
  const [recommendations, setRecommendations] = useState<ReceivePersonalizedRecommendationsOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecs() {
      try {
        const result = await receivePersonalizedRecommendations({
          userId: "user-123",
          pastOrders: [
            {
              restaurantName: "Biryani Blues",
              foodItems: [{ name: "Chicken Biryani", quantity: 1, price: 320 }],
              orderDate: "2024-03-01"
            }
          ],
          browsingHistory: [
            { restaurantName: "Pizza Paradise", timestamp: new Date().toISOString() }
          ]
        });
        setRecommendations(result);
      } catch (e) {
        console.error("Failed to load recommendations", e);
      } finally {
        setLoading(false);
      }
    }
    fetchRecs();
  }, []);

  if (loading) return null;
  if (!recommendations) return null;

  // Map AI recommendations back to our real mock data if possible, or just show the AI data
  // For this demo, we'll try to find matches in our static list
  const recommendedRestIds = recommendations.recommendedRestaurants.map(r => r.name);
  const displayRestos = RESTAURANTS.filter(r => recommendedRestIds.some(name => r.name.toLowerCase().includes(name.toLowerCase())));

  // If no matches, just show the top 2 from our list but labeled as recommended
  const finalDisplay = displayRestos.length > 0 ? displayRestos : RESTAURANTS.slice(0, 2);

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent animate-pulse" />
        <h2 className="text-2xl font-bold">Personalized For You</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {finalDisplay.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  );
}
