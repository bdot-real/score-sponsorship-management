
// Description: Get user notifications
// Endpoint: GET /api/notifications
// Request: {}
// Response: { notifications: Array<{ _id: string, title: string, message: string, type: string, date: string, read: boolean }> }
export const getNotifications = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        notifications: [
          {
            _id: '1',
            title: 'New Sponsorship Opportunity',
            message: 'A new United Rugby Championship jersey sponsorship opportunity is available',
            type: 'opportunity',
            date: '2024-03-20T10:00:00Z',
            read: false
          },
          {
            _id: '2',
            title: 'Application Status',
            message: 'Your application for stadium naming rights has been received',
            type: 'status',
            date: '2024-03-19T15:30:00Z',
            read: true
          },
          {
            _id: '3',
            title: 'Contract Ready',
            message: 'The contract for LED advertising boards is ready for review',
            type: 'contract',
            date: '2024-03-18T09:15:00Z',
            read: false
          }
        ]
      });
    }, 500);
  });
};

// Description: Mark notification as read
// Endpoint: POST /api/notifications/read
// Request: { notificationId: string }
// Response: { success: boolean, message: string }
export const markNotificationAsRead = (_notificationId: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Notification marked as read'
      });
    }, 500);
  });
};