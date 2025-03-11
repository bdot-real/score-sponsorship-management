import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import { getContracts, signContract } from "@/api/contracts";
import { FileText, Check, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Define TypeScript interfaces for contract structure
interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

interface Contract {
  _id: string;
  title: string;
  status: "completed" | "current" | "upcoming";
  value: number;
  startDate: string;
  endDate: string;
  timeline: TimelineEvent[];
}

export function Contracts() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [_loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    loadContracts();
  }, []);

  const loadContracts = async () => {
    try {
      const response = await getContracts() as { contracts: Contract[] };
      setContracts(response.contracts);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to load contracts",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSign = async (id: string) => {
    try {
      await signContract(id);
      toast({
        title: "Success",
        description: "Contract signed successfully",
      });

      // Refresh contracts after signing
      loadContracts();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign contract",
      });
    }
  };

  const getStatusIcon = (status: "completed" | "current" | "upcoming") => {
    switch (status) {
      case "completed":
        return <Check className="h-4 w-4 text-green-500" />;
      case "current":
        return <Circle className="h-4 w-4 text-blue-500 animate-pulse" />;
      case "upcoming":
        return <Clock className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contracts</h1>
      <div className="grid gap-6">
        {contracts.map((contract) => (
          <Card key={contract._id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{contract.title}</CardTitle>
                <Button variant="outline" onClick={() => handleSign(contract._id)}>
                  <FileText className="mr-2 h-4 w-4" />
                  Sign Contract
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="flex items-center">
                      {getStatusIcon(contract.status)}
                      {contract.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Value</p>
                    <p>${contract.value.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Start Date</p>
                    <p>{new Date(contract.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">End Date</p>
                    <p>{new Date(contract.endDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Contract Timeline</h3>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted" />
                    <div className="space-y-8">
                      {contract.timeline.map((event, index) => (
                        <div
                          key={index}
                          className={cn(
                            "relative pl-10",
                            event.status === "current" && "animate-pulse"
                          )}
                        >
                          <div className="absolute left-2.5 top-1 -translate-x-1/2 transform">
                            {getStatusIcon(event.status)}
                          </div>
                          <div className="rounded-lg border bg-card p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{event.title}</h4>
                              <span className="text-sm text-muted-foreground">
                                {new Date(event.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
