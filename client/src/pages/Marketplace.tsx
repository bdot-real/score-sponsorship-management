import { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import { getSponsorships, applySponsorships } from "@/api/sponsorships";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export interface Opportunity {
  _id: string;
  title: string;
  description: string;
  status: string;
  location: string;
  type: string;
  price: number;
}

export function Marketplace() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });
  const { toast } = useToast();

  const loadOpportunities = async () => {
    try {
      setLoading(true);
      const response = await getSponsorships(filters) as { sponsorships: Opportunity[] };
      const filtered = response.sponsorships.filter(opp => 
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setOpportunities(filtered);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOpportunities();
  }, [searchTerm, filters]);

  const handleApply = async (id: string) => {
    try {
      await applySponsorships(id);
      toast({
        title: "Success",
        description: "Application submitted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : String(error),
      });
    }
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      type: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  const types = ["Jersey", "Streaming", "Venue", "In-Stadium", "Partnership", "Digital", "Equipment", "Hospitality", "Community"];
  const locations = ["Ireland", "Multiple Regions", "South Africa", "Wales", "All Regions", "Scotland", "Global", "Italy"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sponsorship Opportunities</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Opportunities</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Select
                  value={filters.location}
                  onValueChange={(value) => setFilters({ ...filters, location: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Select
                  value={filters.type}
                  onValueChange={(value) => setFilters({ ...filters, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Min Price</Label>
                <Input
                  type="number"
                  placeholder="Minimum price"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Max Price</Label>
                <Input
                  type="number"
                  placeholder="Maximum price"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                />
              </div>
              <Button onClick={clearFilters} variant="outline" className="w-full">
                <X className="mr-2 h-4 w-4" />
                Clear Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search opportunities..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p>Loading...</p>
        ) : opportunities.length === 0 ? (
          <p>No opportunities found matching your criteria.</p>
        ) : (
          opportunities.map((opportunity) => (
            <Card key={opportunity._id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <Badge variant={opportunity.status === 'available' ? 'default' : 'secondary'}>
                    {opportunity.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{opportunity.description}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Type</span>
                    <span>{opportunity.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Price</span>
                    <span>${opportunity.price.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  disabled={opportunity.status !== 'available'}
                  onClick={() => handleApply(opportunity._id)}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}