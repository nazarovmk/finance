import { NavLink } from "react-router-dom";
import { useCollectionsData } from "../../hooks/useCollectionsData";

function Pots() {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.balance)) {
    return;
  }

  const totalSaved = data.pots?.reduce(
    (acc, item) => acc + Number(item.total || 0),
    0
  );

  return (
    <div className="card">
      <span className="nav-title">
        <h3>Pots</h3>
        <NavLink className="NavLink" to="/pots">
          See Details
          <img src="./icon-caret-right.svg" alt="" />
        </NavLink>
      </span>
      <div className="pots-wrap">
        <div className="total-sav">
          <div className="total-sav-wrap">
            <img src="./icon-pot.svg" alt="" />
            <span>
              <p>Total Saved</p>
              <h4>${totalSaved}</h4>
            </span>
          </div>
        </div>
        <div className="chart-container">
          {data.pots.slice(0, 4).map((item, index) => {
            const borderColor = ["#626070", "#826CB0", "#F2CDAC", "#277C78"][
              index
            ];
            return (
              <div
                className="chart"
                key={index}
                style={{
                  borderLeft: `4px solid ${borderColor}`,
                  paddingLeft: "16px",
                  borderRadius: "4px",
                }}
              >
                <h3>{item.name}</h3>
                <h4>${item.total}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pots;
