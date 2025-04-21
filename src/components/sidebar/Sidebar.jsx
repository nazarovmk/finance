import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";
import "./Sidebar.scss";

function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const { logout } = useLogout();

  const handleLogout = () => {
    if (user?.uid) {
      logout(user.uid);
    }
  };
  return (
    <div>
      <h1>Sidebar</h1>
      {user && <button onClick={handleLogout}>Log out</button>}
    </div>
  );
}

export default Sidebar;
