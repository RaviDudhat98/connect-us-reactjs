import Avatar from "./Avatar";

type Props = {
  name: string;
  role?: string;
  active?: boolean;
  onClick: () => void;
};

const UserItem = ({ name, role, active, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg ${active ? "bg-blue-100 dark:bg-blue-900" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
    >
      <Avatar name={name} />

      <div className="flex-1">
        <p className="font-medium">{name}</p>
      </div>

      {role && (
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {role}
        </span>
      )}
    </div>
  );
};

export default UserItem;
