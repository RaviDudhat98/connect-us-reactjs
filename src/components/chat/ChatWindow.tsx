import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

type Props = {
  chatId: string;
};

const ChatWindow = ({ chatId }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-2 border-b border-gray-300">
        <button className="md:hidden" onClick={() => navigate("/chat")}>
          <ArrowBackIcon />
        </button>

        <div>
          <p className="font-semibold">User {chatId}</p>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Left message */}
        <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg w-fit">
          Hello 👋
        </div>

        {/* Right message */}
        <div className="bg-blue-500 text-white p-3 rounded-lg w-fit ml-auto">
          Hi!
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-300 flex gap-2">
        <input
          className="flex-1 p-2 rounded-lg bg-secondary outline-none"
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-4 rounded-lg">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
