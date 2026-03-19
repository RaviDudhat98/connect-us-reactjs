import { useNavigate, useParams } from "react-router";
import UserItem from "./UserItem";

const users = [
  { id: 1, name: "Alex Mason", role: "Owner" },
  { id: 2, name: "Andrew Joseph", role: "Admin" },
];

const UserList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-1">
      {users.map((user) => (
        <UserItem
          key={user.id}
          {...user}
          active={id === String(user.id)}
          onClick={() => navigate(`/chat/${user.id}`)}
        />
      ))}
    </div>
  );
};

export default UserList;
