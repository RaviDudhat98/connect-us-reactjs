import Avatar from "./Avatar";

type Props = {
  name: string;
  message: string;
  time: string;
  active?: boolean;
  onClick: () => void;
};

const ChatItem = ({ name, message, time, active, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg
        ${active ? "bg-blue-100 dark:bg-blue-900" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
    >
      <Avatar name={name} />

      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500 truncate">{message}</p>
      </div>

      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
};

export default ChatItem;
