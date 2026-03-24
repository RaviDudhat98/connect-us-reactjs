import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

type Props = {
  value: number;
  onChange: (val: number) => void;
};

const tabs = [
  { label: "Chats", icon: <ChatBubbleOutlineIcon sx={{ fontSize: 22 }} /> },
  { label: "Users", icon: <PeopleOutlineIcon sx={{ fontSize: 22 }} /> },
];

const BottomTabs = ({ value, onChange }: Props) => {
  return (
    <div className="bottom-tabs">
      {tabs.map((tab, index) => (
        <button
          key={tab.label}
          className={`bottom-tab-item ${value === index ? "active" : ""}`}
          onClick={() => onChange(index)}
        >
          {tab.icon}
          <span className="bottom-tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomTabs;
