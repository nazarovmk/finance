import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    path: "/",
    label: "Overview",
    icon: "icon-nav-overview.svg",
    activeIcon: "Overview.svg",
  },
  {
    path: "/transactions",
    label: "Transactions",
    icon: "icon-nav-transactions.svg",
    activeIcon: "Transactions.svg",
  },
  {
    path: "/budgets",
    label: "Budgets",
    icon: "icon-nav-budgets.svg",
    activeIcon: "Budgets.svg",
  },
  {
    path: "/pots",
    label: "Pots",
    icon: "icon-nav-pots.svg",
    activeIcon: "green-pots.svg",
  },
  {
    path: "/recurringBills",
    label: "Recurring bills",
    icon: "icon-nav-recurring-bills.svg",
    activeIcon: "Recurring.svg",
  },
];

function Sidebar({ showNavbar, setShowNavbar }) {
  return (
    <div className={`Sidebar-container ${showNavbar ? "toggle-bar" : ""}`}>
      <div>
        <div className="logo-wrap">
          <img
            className={showNavbar ? "sidebar-logo-small" : "sidebar-logo"}
            src={showNavbar ? "./Logo.svg" : "./logo-large.svg"}
            alt=""
          />
        </div>
        <div className="item-wrap">
          {navItems.map((item) => (
            <NavLink className="items" to={item.path} key={item.path}>
              {({ isActive }) => (
                <>
                  <img
                    src={`./${isActive ? item.activeIcon : item.icon}`}
                    alt=""
                  />
                  {!showNavbar && <p>{item.label}</p>}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div
        onClick={() => setShowNavbar(!showNavbar)}
        className="side-logout items"
      >
        <img src="./icon-minimize-menu.svg" alt="" />
        {!showNavbar && <p>Minimize Menu</p>}
      </div>
    </div>
  );
}

export default Sidebar;
