import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { chats, messagesMap } from "../../data/mockData";

type Props = {
  chatId: string;
};

const ChatWindow = ({ chatId }: Props) => {
  const numericId = parseInt(chatId, 10);
  const chat = chats.find((c) => c.id === numericId);
  const messages = messagesMap[numericId] || [];

  const name = chat?.name || `User ${chatId}`;
  const isOnline = chat?.isOnline ?? false;

  return (
    <div className="chat-window">
      <ChatHeader name={name} isOnline={isOnline} />
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
