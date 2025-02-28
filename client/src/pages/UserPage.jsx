import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const UserPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>User Page</h2>
      {user && <div>Hello {user.name}.</div>}
    </div>
  );
};

export default UserPage;
