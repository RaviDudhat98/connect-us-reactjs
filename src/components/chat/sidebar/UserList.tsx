import { useNavigate, useParams } from "react-router";
import UserItem from "./UserItem";
import { users } from "../../../data/mockData";

const UserList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="user-list">
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
