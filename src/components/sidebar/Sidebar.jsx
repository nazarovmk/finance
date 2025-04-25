import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const { logout } = useLogout();

  const handleLogout = () => {
    if (user?.uid) {
      logout(user.uid);
    }
  };
  return (
    <div className="Sidebar-container">
      <div className="logo-wrap">
        <img className="sidebar-logo" src="./logo-large.svg" alt="" />
      </div>
      <div className="item-wrap">
        <NavLink className="items" to="/">
          {({ isActive }) => (
            <>
              <img
                src={isActive ? "./Overview.svg" : "./icon-nav-overview.svg"}
                alt=""
              />
              <p>Overview</p>
            </>
          )}
        </NavLink>
        <NavLink className="items" to="/transactions">
          {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "./Transactions.svg"
                    : "./icon-nav-transactions.svg"
                }
                alt=""
              />
              <p>Transactions</p>
            </>
          )}
        </NavLink>
        <NavLink className="items" to="/budgets">
          {({ isActive }) => (
            <>
              <img
                src={isActive ? "./Budgets.svg" : "./icon-nav-budgets.svg"}
                alt=""
              />
              <p>Budgets</p>
            </>
          )}
        </NavLink>
        <NavLink className="items" to="/pots">
          {({ isActive }) => (
            <>
              <img
                src={isActive ? "./green-pots.svg" : "./icon-nav-pots.svg"}
                alt=""
              />
              <p>Pots</p>
            </>
          )}
        </NavLink>
        <NavLink className="items" to="/recurringBills">
          {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "./Recurring.svg"
                    : "./icon-nav-recurring-bills.svg"
                }
                alt=""
              />
              <p>Recurring bills</p>
            </>
          )}
        </NavLink>
      </div>
      <div className="side-logout">
        {user && (
          <NavLink className="items" to="/login">
            <img onClick={handleLogout} src="./icon-minimize-menu.svg" alt="" />
            <p>Minimize Menu</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
