import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // UI only - will connect to backend later
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="message-input-container">
      <div className="message-input-wrapper">
        <div className="message-input-icons-left">
          <button className="input-icon-btn" aria-label="Attach file">
            <AddCircleOutlineIcon sx={{ fontSize: 22 }} />
          </button>
        </div>
        <input
          type="text"
          className="message-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="message-input-icons-right">
          <button className="input-icon-btn" aria-label="Voice message">
            <MicNoneOutlinedIcon sx={{ fontSize: 22 }} />
          </button>
          <button className="input-icon-btn" aria-label="Emoji">
            <SentimentSatisfiedOutlinedIcon sx={{ fontSize: 22 }} />
          </button>
          <button className="input-icon-btn" aria-label="Bookmark">
            <BookmarkBorderOutlinedIcon sx={{ fontSize: 22 }} />
          </button>
        </div>
      </div>
      <button
        className={`send-btn ${message.trim() ? "active" : ""}`}
        onClick={handleSend}
        aria-label="Send message"
      >
        <SendIcon sx={{ fontSize: 20 }} />
      </button>
    </div>
  );
};

export default MessageInput;
