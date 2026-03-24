import Avatar from "./Avatar";
import type { User } from "../../../data/mockData";

type Props = User & {
  active?: boolean;
  onClick: () => void;
};

const UserItem = ({ name, isOnline, active, onClick, bio, lastSeen }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`user-item ${active ? "active" : ""}`}
    >
      <Avatar name={name} isOnline={isOnline} />

      <div className="user-item-info">
        <p className="user-item-name">{name}</p>
        <p className="user-item-status">
          {isOnline ? bio || "Online" : lastSeen ? `Last seen ${lastSeen}` : "Offline"}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
