// src/services/notificationService.js
let notifications = [];

export const addNotification = (notification) => {
  notifications.push(notification);
};

export const getNotifications = () => {
  return notifications;
};

export const clearNotifications = () => {
  notifications = [];
};