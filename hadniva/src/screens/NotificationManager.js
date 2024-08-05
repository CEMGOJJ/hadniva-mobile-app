/*
import { addNotification } from './notificationService';

const NotificationManager = {
  addFriendRequestNotification: async (friendName) => {
    const notification = {
      title: 'New Friend Request',
      message: `${friendName} sent you a friend request.`,
      icon: require('../asset/linkedin.png'), // Make sure to add this icon to your assets
      type: 'friendRequest',
    };
    await addNotification(notification);
  },

  addPostLikeNotification: async (friendName, postPreview) => {
    const notification = {
      title: 'New Like on Your Post',
      message: `${friendName} liked your post: "${postPreview}"`,
      icon: require('../asset/google.png'), // Make sure to add this icon to your assets
      type: 'postLike',
    };
    await addNotification(notification);
  },

  addCommentNotification: async (friendName, postPreview) => {
    const notification = {
      title: 'New Comment on Your Post',
      message: `${friendName} commented on your post: "${postPreview}"`,
      icon: require('../asset/apple.png'), // Make sure to add this icon to your assets
      type: 'comment',
    };
    await addNotification(notification);
  },

  addEventInviteNotification: async (friendName, eventName) => {
    const notification = {
      title: 'New Event Invite',
      message: `${friendName} invited you to ${eventName}`,
      icon: require('../asset/NoNotification.png'), // Make sure to add this icon to your assets
      type: 'eventInvite',
    };
    await addNotification(notification);
  },
};

export default NotificationManager;
*//*
import { addNotification } from './notificationService';

const NotificationManager = {
  addFriendRequestNotification: async (friendName) => {
    const notification = {
      title: 'New Friend Request',
      message: `${friendName} sent you a friend request.`,
      icon: require('../assets/icons/friend-request.png'),
      type: 'friendRequest',
      data: { friendName },
    };
    await addNotification(notification);
  },

  addPostLikeNotification: async (friendName, postId, postPreview) => {
    const notification = {
      title: 'New Like on Your Post',
      message: `${friendName} liked your post: "${postPreview}"`,
      icon: require('../assets/icons/post-like.png'),
      type: 'postLike',
      data: { friendName, postId },
    };
    await addNotification(notification);
  },

  addCommentNotification: async (friendName, postId, commentPreview) => {
    const notification = {
      title: 'New Comment on Your Post',
      message: `${friendName} commented: "${commentPreview}"`,
      icon: require('../assets/icons/comment.png'),
      type: 'comment',
      data: { friendName, postId },
    };
    await addNotification(notification);
  },

  addEventInviteNotification: async (friendName, eventId, eventName) => {
    const notification = {
      title: 'New Event Invite',
      message: `${friendName} invited you to ${eventName}`,
      icon: require('../assets/icons/event-invite.png'),
      type: 'eventInvite',
      data: { friendName, eventId },
    };
    await addNotification(notification);
  },

  addMessageNotification: async (senderName, messagePreview) => {
    const notification = {
      title: 'New Message',
      message: `${senderName}: ${messagePreview}`,
      icon: require('../assets/icons/message.png'),
      type: 'message',
      data: { senderName },
    };
    await addNotification(notification);
  },

  addGroupInviteNotification: async (inviterName, groupName) => {
    const notification = {
      title: 'New Group Invite',
      message: `${inviterName} invited you to join ${groupName}`,
      icon: require('../assets/icons/group-invite.png'),
      type: 'groupInvite',
      data: { inviterName, groupName },
    };
    await addNotification(notification);
  },
};

export default NotificationManager;
*/
import { addNotification } from './notificationService';

const NotificationManager = {
  addFriendRequestNotification: async (friendName) => {
    const notification = {
      title: 'New Friend Request',
      message: `${friendName} sent you a friend request.`,
      icon: require('../asset/apple.png'),
      type: 'friendRequest',
      data: { friendName },
    };
    await addNotification(notification);
  },

  addPostLikeNotification: async (friendName, postId, postPreview) => {
    const notification = {
      title: 'New Like on Your Post',
      message: `${friendName} liked your post: "${postPreview}"`,
      icon: require('../asset/google.png'),
      type: 'postLike',
      data: { friendName, postId },
    };
    await addNotification(notification);
  },

  addCommentNotification: async (friendName, postId, commentPreview) => {
    const notification = {
      title: 'New Comment on Your Post',
      message: `${friendName} commented: "${commentPreview}"`,
      icon: require('../asset/linkedin.png'),
      type: 'comment',
      data: { friendName, postId },
    };
    await addNotification(notification);
  },

  addEventInviteNotification: async (friendName, eventId, eventName) => {
    const notification = {
      title: 'New Event Invite',
      message: `${friendName} invited you to ${eventName}`,
      icon: require('../asset/NoNotification.png'),
      type: 'eventInvite',
      data: { friendName, eventId },
    };
    await addNotification(notification);
  },

  addMessageNotification: async (senderName, messagePreview) => {
    const notification = {
      title: 'New Message',
      message: `${senderName}: ${messagePreview}`,
      icon: require('../asset/apple.png'),
      type: 'message',
      data: { senderName },
    };
    await addNotification(notification);
  },

  addGroupInviteNotification: async (inviterName, groupName) => {
    const notification = {
      title: 'New Group Invite',
      message: `${inviterName} invited you to join ${groupName}`,
      icon: require('../asset/google.png'),
      type: 'groupInvite',
      data: { inviterName, groupName },
    };
    await addNotification(notification);
  },

  addSystemNotification: async (title, message) => {
    const notification = {
      title,
      message,
      icon: require('../asset/linkedin.png'),
      type: 'system',
      data: {},
    };
    await addNotification(notification);
  },
};

export default NotificationManager;