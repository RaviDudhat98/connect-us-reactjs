import Avatar from "./Avatar";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import type { Chat } from "../../../data/mockData";

type Props = Chat & {
  active?: boolean;
  onClick: () => void;
};

const typeIcons: Record<string, React.ReactNode> = {
  photo: <PhotoCameraOutlinedIcon sx={{ fontSize: 15 }} />,
  video: <VideocamOutlinedIcon sx={{ fontSize: 15 }} />,
  audio: <HeadphonesOutlinedIcon sx={{ fontSize: 15 }} />,
};

const ChatItem = ({
  name,
  lastMessage,
  time,
  active,
  onClick,
  unreadCount,
  isOnline,
  lastMessageType,
  isRead,
  senderPrefix,
}: Props) => {
  const renderMessage = () => {
    // Show type icon for media messages
    const typeIcon =
      lastMessageType && lastMessageType !== "text"
        ? typeIcons[lastMessageType]
        : null;

    return (
      <p className="chat-item-message">
        {isRead && (
          <span className="chat-item-read">
            <DoneAllIcon sx={{ fontSize: 16, color: "#7C3AED" }} />
          </span>
        )}
        {typeIcon && <span className="type-icon">{typeIcon}</span>}
        {senderPrefix && (
          <>
            <span className="sender-prefix">{senderPrefix}:</span>{" "}
          </>
        )}
        {lastMessage}
      </p>
    );
  };

  return (
    <div
      onClick={onClick}
      className={`chat-item ${active ? "active" : ""}`}
    >
      <Avatar name={name} isOnline={isOnline} />

      <div className="chat-item-content">
        <div className="chat-item-top">
          <p className="chat-item-name">{name}</p>
          <span className="chat-item-time">{time}</span>
        </div>
        <div className="chat-item-bottom">
          {renderMessage()}
          {unreadCount && unreadCount > 0 && (
            <span className="unread-badge">{unreadCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
