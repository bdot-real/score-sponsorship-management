import { Home, Globe, FileText, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Marketplace", icon: Globe, path: "/marketplace" },
    { name: "Contracts", icon: FileText, path: "/contracts" },
    { name: "Notifications", icon: Bell, path: "/notifications" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="w-64 border-r bg-card/50 backdrop-blur-sm">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Sports Sponsorships</h2>
      </div>
      <div className="px-3 py-4">
        <nav className="space-y-2">
          {menu.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                location.pathname === item.path && "bg-secondary"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.name}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}