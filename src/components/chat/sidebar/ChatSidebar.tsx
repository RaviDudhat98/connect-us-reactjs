import { useState } from "react";
import ChatList from "./ChatList";
import UserList from "./UserList";
import BottomTabs from "./BottomTabs";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ChatSidebar = () => {
  const [tab, setTab] = useState(0);

  const tabTitles = ["Chats", "Users"];

  return (
    <div className="chat-sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <h2>{tabTitles[tab]}</h2>
        <div className="sidebar-header-actions">
          <button className="sidebar-header-btn" aria-label="More options">
            <MoreVertIcon sx={{ fontSize: 22 }} />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="sidebar-content">
        {tab === 0 ? <ChatList /> : <UserList />}
      </div>

      {/* Bottom Tabs */}
      <BottomTabs value={tab} onChange={setTab} />
    </div>
  );
};

export default ChatSidebar;
