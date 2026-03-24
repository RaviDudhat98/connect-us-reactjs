import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router";
import Avatar from "./sidebar/Avatar";

type Props = {
  name: string;
  isOnline?: boolean;
  avatar?: string;
};

const ChatHeader = ({ name, isOnline, avatar }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <button
          className="chat-header-back"
          onClick={() => navigate("/chat")}
          aria-label="Back to chats"
        >
          <ArrowBackIcon sx={{ fontSize: 22 }} />
        </button>
        <Avatar name={name} src={avatar} isOnline={isOnline} size={40} />
        <div className="chat-header-info">
          <h3 className="chat-header-name">{name}</h3>
          <span className="chat-header-status">
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>
      <div className="chat-header-actions">
        <button className="chat-header-action" aria-label="Video call">
          <VideocamOutlinedIcon sx={{ fontSize: 22 }} />
        </button>
        <button className="chat-header-action" aria-label="Voice call">
          <CallOutlinedIcon sx={{ fontSize: 22 }} />
        </button>
        <button className="chat-header-action" aria-label="Pin">
          <PushPinOutlinedIcon sx={{ fontSize: 22 }} />
        </button>
        <button className="chat-header-action" aria-label="Info">
          <InfoOutlinedIcon sx={{ fontSize: 22 }} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
