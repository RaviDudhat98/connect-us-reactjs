import { useState } from "react";
import TabsHeader from "./TabsHeader";
import ChatList from "./ChatList";
import UserList from "./UserList";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ChatSidebar = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-full md:w-88 h-full border-r border-gray-300 flex flex-col bg-primary ">
      {/* Header */}
      <div className="flex items-center justify-between p-2 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Chats</h2>
        <MoreVertIcon className="cursor-pointer" />
      </div>

      {/* Tabs */}
      <TabsHeader value={tab} onChange={setTab} />

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-2">
        {tab === 0 ? <ChatList /> : <UserList />}
      </div>
    </div>
  );
};

export default ChatSidebar;
