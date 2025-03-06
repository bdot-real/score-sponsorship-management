import { useState, useEffect } from "react";
import { getNotifications, markNotificationAsRead } from "@/api/notifications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import { Bell, BellRing, FileText, Globe, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Notification = {
  _id: string;
  title: string;
  message: string;
  type: string;
  date: string;
  read: boolean;
};

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const response = await getNotifications();
      setNotifications(response.notifications);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await markNotificationAsRead(id);
      setNotifications(notifications.map(notif => 
        notif._id === id ? { ...notif, read: true } : notif
      ));
      toast({
        title: "Success",
        description: "Notification marked as read",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'opportunity':
        return Globe;
      case 'contract':
        return FileText;
      case 'status':
        return CheckCircle;
      default:
        return Bell;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline">
          <BellRing className="mr-2 h-4 w-4" />
          Mark all as read
        </Button>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = getIcon(notification.type);
          return (
            <Card
              key={notification._id}
              className={cn(
                "transition-colors hover:bg-muted/50",
                !notification.read && "border-primary/50 bg-primary/5"
              )}
            >
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className={cn(
                  "rounded-full p-2",
                  !notification.read ? "bg-primary/10" : "bg-muted"
                )}>
                  <Icon className={cn(
                    "h-4 w-4",
                    !notification.read ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">
                    {notification.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {new Date(notification.date).toLocaleDateString()} at{" "}
                    {new Date(notification.date).toLocaleTimeString()}
                  </p>
                </div>
                {!notification.read && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMarkAsRead(notification._id)}
                  >
                    Mark as read
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {notification.message}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}