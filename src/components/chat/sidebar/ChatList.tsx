import { useNavigate, useParams } from "react-router";
import ChatItem from "./ChatItem";
import EmptyState from "./EmptyState";
import { chats } from "../../../data/mockData";

const ChatList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (chats.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          {...chat}
          active={id === String(chat.id)}
          onClick={() => navigate(`/chat/${chat.id}`)}
        />
      ))}
    </div>
  );
};

export default ChatList;
