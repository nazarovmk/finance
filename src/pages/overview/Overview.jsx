import "./Overview.scss";
import Current from "./Current";
import Pots from "./Pots";
import Transactions from "./Transactions";
import Budgets from "./Budgets";
import RecurringBills from "./RecurringBills";

function Overview() {
  return (
    <section className="Overview-container">
      <h2 className="overview-title">Overview</h2>
      <div>
        <Current />
        <div className="overview-cards-grid">
          <Pots />
          <Budgets />
          <Transactions />
          <RecurringBills />
        </div>
      </div>
    </section>
  );
}

export default Overview;
