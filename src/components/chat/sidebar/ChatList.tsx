import { useNavigate, useParams } from "react-router";
import ChatItem from "./ChatItem";

const chats = [
  { id: 1, name: "George Alan", message: "I'll take it.", time: "4:30 PM" },
  { id: 2, name: "Uber Cars", message: "Your ride is here", time: "4:30 PM" },
];

const ChatList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-1">
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
