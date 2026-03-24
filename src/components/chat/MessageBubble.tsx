import DoneAllIcon from "@mui/icons-material/DoneAll";
import ReplyIcon from "@mui/icons-material/Reply";
import type { Message } from "../../data/mockData";

type Props = {
  message: Message;
};

const MessageBubble = ({ message }: Props) => {
  const { text, image, timestamp, isSent, isRead, reactions, replyCount } =
    message;

  return (
    <div className={`message-row ${isSent ? "sent" : "received"}`}>
      <div className={`message-bubble ${isSent ? "sent" : "received"}`}>
        {image && (
          <div className="message-image-wrapper">
            <div
              className="message-image"
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                width: "100%",
                height: "180px",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                📷 Photo
              </span>
            </div>
          </div>
        )}
        {text && <p className="message-text">{text}</p>}
        <div className="message-meta">
          <span className="message-time">{timestamp}</span>
          {isSent && (
            <DoneAllIcon
              sx={{
                fontSize: 16,
                color: isRead ? "#7C3AED" : "#9CA3AF",
                marginLeft: "2px",
              }}
            />
          )}
        </div>
      </div>

      {/* Reactions */}
      {reactions && reactions.length > 0 && (
        <div className={`message-reactions ${isSent ? "sent" : "received"}`}>
          {reactions.map((emoji, i) => (
            <span key={i} className="reaction-badge">
              {emoji}
            </span>
          ))}
        </div>
      )}

      {/* Reply count */}
      {replyCount && replyCount > 0 && (
        <div className={`message-replies ${isSent ? "sent" : "received"}`}>
          <ReplyIcon sx={{ fontSize: 14, transform: "scaleX(-1)" }} />
          <span>{replyCount} Replies</span>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
