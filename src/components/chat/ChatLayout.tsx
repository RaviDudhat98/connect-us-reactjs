import { useParams } from "react-router";
import ChatWindow from "./ChatWindow";
import ChatSidebar from "./sidebar/ChatSidebar";
import WelcomeScreen from "./WelcomeScreen";

const ChatLayout = () => {
  const { id } = useParams();

  return (
    <div className={`chat-layout ${id ? "has-active-chat" : ""}`}>
      {/* Sidebar */}
      <ChatSidebar />

      {/* Right Side - Chat or Welcome */}
      <div className="chat-window-wrapper">
        {id ? <ChatWindow chatId={id} /> : <WelcomeScreen />}
      </div>
    </div>
  );
};

export default ChatLayout;
