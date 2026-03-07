"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Package, MapPin, User, Settings, LogOut, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const pastOrders = [
    { id: "FF-102", restaurant: "Biryani Blues", date: "Yesterday, 8:30 PM", status: "Delivered", amount: 450, items: ["Chicken Biryani", "Paneer Tikka"] },
    { id: "FF-098", restaurant: "Pizza Paradise", date: "4 March, 1:15 PM", status: "Delivered", amount: 645, items: ["Margherita Pizza", "Garlic Bread"] },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Navigation */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarImage src="https://picsum.photos/seed/user/200/200" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">Animesh Das</h2>
                  <p className="text-sm text-muted-foreground">+91 9876543210</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/5 text-primary">
              <Package className="w-4 h-4" />
              Orders
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <MapPin className="w-4 h-4" />
              Addresses
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Star className="w-4 h-4" />
              Reviews
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
            <Separator className="my-2" />
            <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </nav>
        </div>

        {/* Main Content: Orders */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-2xl font-bold">Past Orders</h1>
          {pastOrders.map((order) => (
            <Card key={order.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="bg-muted/30 pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{order.restaurant}</h3>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">{order.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="py-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {order.items.join(", ")}
                  </p>
                  <p className="font-bold">₹{order.amount}</p>
                </div>
                <Separator className="mb-4" />
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1 border-primary text-primary font-bold">REORDER</Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                    View Details <ChevronRight className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
