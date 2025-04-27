import { NavLink } from "react-router-dom";
import { useCollectionsData } from "../../hooks/useCollectionsData";

function RecurringBills() {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.transactions)) {
    return null;
  }

  const paidBills = data.transactions
    .filter((item) => item.status === "paid")
    .reduce((sum, item) => sum + item.amount, 190);

  const totalUpcoming = data.transactions
    .filter((item) => item.status === "upcoming")
    .reduce((sum, item) => sum + item.amount, 194.98);

  const dueSoon = data.transactions
    .filter((item) => item.status === "due_soon")
    .reduce((sum, item) => sum + item.amount, 59.98);

  return (
    <div className="card">
      <span className="nav-title">
        <h3>Recurring Bills</h3>
        <NavLink className="NavLink" to="/recurringBills">
          See Details
          <img src="./icon-caret-right.svg" alt="" />
        </NavLink>
      </span>
      <div className="bill-summary">
        <div className="paid-bills">
          <span className="span">Paid Bills</span>
          <span>${paidBills.toFixed(2)}</span>
        </div>
        <div className="paid-bills">
          <span className="span">Total Upcoming</span>
          <span>${totalUpcoming.toFixed(2)}</span>
        </div>
        <div className="paid-bills">
          <span className="span">Due Soon</span>
          <span>${dueSoon.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default RecurringBills;
