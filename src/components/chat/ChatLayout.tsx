import { useParams } from "react-router";
import ChatWindow from "./ChatWindow";
import ChatSidebar from "./sidebar/ChatSidebar";

const ChatLayout = () => {
  const { id } = useParams();

  return (
    <div className={`h-full ${id ? "hidden md:flex" : "flex"}`}>
      {/* Sidebar */}
      <ChatSidebar />

      {/* Right Side */}
      <div className="flex-1 bg-secondary">
        {id ? (
          <ChatWindow chatId={id} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLayout;
