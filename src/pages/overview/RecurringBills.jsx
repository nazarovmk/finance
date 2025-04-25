import { NavLink } from "react-router-dom";

function RecurringBills() {
  return (
    <div className="card">
      <span className="nav-title">
        <h3>Recurring Bills</h3>
        <NavLink className="NavLink" to="/recurringBills">
          See Details
          <img src="./icon-caret-right.svg" alt="" />
        </NavLink>
      </span>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default RecurringBills;
