import { NavLink } from "react-router-dom";
import ApexChart from "./ApexChart";
import { useCollectionsData } from "../../hooks/useCollectionsData";

function Budgets() {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.transactions)) {
    return null;
  }
  return (
    <div className="card">
      <span className="nav-title">
        <h3>Budgets</h3>
        <NavLink className="NavLink" to="/budgets">
          See Details
          <img src="./icon-caret-right.svg" alt="" />
        </NavLink>
      </span>
      <div className="apexchart">
        <ApexChart />
      </div>
    </div>
  );
}

export default Budgets;
