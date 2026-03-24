export interface Chat {
  id: number;
  name: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
  lastMessageType?: "text" | "photo" | "video" | "audio" | "sticker" | "voice_call";
  isRead?: boolean;
  senderPrefix?: string;
}

export interface Message {
  id: number;
  text?: string;
  image?: string;
  timestamp: string;
  isSent: boolean;
  isRead?: boolean;
  reactions?: string[];
  replyCount?: number;
}

export interface User {
  id: number;
  name: string;
  avatar?: string;
  isOnline?: boolean;
  lastSeen?: string;
  bio?: string;
}

export const chats: Chat[] = [
  {
    id: 1,
    name: "George Alan",
    lastMessage: "I'll take it. Can you ship it?",
    time: "4:30 PM",
    isOnline: true,
    isRead: false,
    lastMessageType: "text",
  },
  {
    id: 2,
    name: "Uber Cars",
    lastMessage: "Your ride is 2 minutes away. Please confirm...",
    time: "4:30 PM",
    lastMessageType: "text",
    senderPrefix: "Allen",
  },
  {
    id: 3,
    name: "Safiya Fareena",
    lastMessage: "Video",
    time: "4:30 PM",
    unreadCount: 1,
    lastMessageType: "video",
    isOnline: true,
  },
  {
    id: 4,
    name: "Robert Allen",
    lastMessage: "Thanks for the update. Let me know if there's...",
    time: "4:30 PM",
    isRead: true,
    lastMessageType: "text",
  },
  {
    id: 5,
    name: "Epic Game",
    lastMessage: "Your team scored a new...",
    time: "4:30 PM",
    unreadCount: 24,
    lastMessageType: "text",
    senderPrefix: "John Paul: @Robert",
  },
  {
    id: 6,
    name: "Scott Franklin",
    lastMessage: "Audio",
    time: "4:30 PM",
    lastMessageType: "audio",
  },
  {
    id: 7,
    name: "Muhammed",
    lastMessage: "🎉 Congratulations on your promotion",
    time: "4:30 PM",
    isRead: true,
    lastMessageType: "text",
    isOnline: true,
  },
  {
    id: 8,
    name: "Innovative Online Shopping",
    lastMessage: "Your order has been shipped and will arrive soo...",
    time: "4:30 PM",
    lastMessageType: "text",
  },
  {
    id: 9,
    name: "John Paul",
    lastMessage: "Sticker",
    time: "4:30 PM",
    isRead: true,
    lastMessageType: "sticker",
  },
];

export const messagesMap: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      text: "Hi, is the watch still up for sale?",
      timestamp: "4:56 pm",
      isSent: true,
      isRead: true,
    },
    {
      id: 2,
      text: "Yes, it's available.",
      timestamp: "4:56 pm",
      isSent: false,
    },
    {
      id: 3,
      text: "Awesome! Can I see a couple of pictures?",
      timestamp: "4:56 pm",
      isSent: true,
      isRead: true,
    },
    {
      id: 4,
      text: "Sure! Sending them over now.",
      timestamp: "4:56 pm",
      isSent: false,
    },
    {
      id: 5,
      image: "/watch.jpg",
      timestamp: "4:56 pm",
      isSent: false,
      reactions: ["😍"],
      replyCount: 4,
    },
    {
      id: 6,
      text: "Thanks! Looks good.",
      timestamp: "4:56 pm",
      isSent: true,
      isRead: true,
    },
    {
      id: 7,
      text: "I'll take it. Can you ship it?",
      timestamp: "4:56 pm",
      isSent: true,
      isRead: true,
    },
  ],
  2: [
    {
      id: 1,
      text: "Allen: Your ride is 2 minutes away. Please confirm your pickup location.",
      timestamp: "4:30 pm",
      isSent: false,
    },
  ],
  3: [
    {
      id: 1,
      text: "Hey! Check out this video I found.",
      timestamp: "4:25 pm",
      isSent: false,
    },
  ],
  4: [
    {
      id: 1,
      text: "Thanks for the update. Let me know if there's anything else I can help with.",
      timestamp: "4:20 pm",
      isSent: false,
    },
    {
      id: 2,
      text: "Will do! I'll keep you posted on the progress.",
      timestamp: "4:22 pm",
      isSent: true,
      isRead: true,
    },
  ],
};

export const users: User[] = [
  { id: 101, name: "George Alan", isOnline: true, bio: "Available" },
  { id: 102, name: "Safiya Fareena", isOnline: true, bio: "Busy" },
  { id: 103, name: "Robert Allen", isOnline: false, lastSeen: "2 hours ago" },
  { id: 104, name: "Scott Franklin", isOnline: true, bio: "At work" },
  { id: 105, name: "Muhammed", isOnline: true, bio: "Hey there!" },
  { id: 106, name: "John Paul", isOnline: false, lastSeen: "Yesterday" },
  { id: 107, name: "Alex Mason", isOnline: false, lastSeen: "3 hours ago" },
  { id: 108, name: "Andrew Joseph", isOnline: true, bio: "Available" },
  { id: 109, name: "Emily Watson", isOnline: true, bio: "In a meeting" },
  { id: 110, name: "David Chen", isOnline: false, lastSeen: "Just now" },
];
