import { useCollectionsData } from "../../hooks/useCollectionsData";

function Current() {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.balance)) {
    return;
  }

  return (
    <div className="balanse-wrapper">
      <div className="overview-section">
        {data.balance.map((item, i) => (
          <div key={i} className="overview-item">
            <h3>Current Balance</h3>
            <p>${item.current}</p>
          </div>
        ))}
      </div>
      <div className="overview-section twos-section">
        {data.balance.map((item, i) => (
          <div key={i} className="overview-item">
            <h3 className="twos-section-title">Income</h3>
            <p className="twos-section-number">${item.income}</p>
          </div>
        ))}
      </div>
      <div className="overview-section twos-section">
        {data.balance.map((item, i) => (
          <div key={i} className="overview-item">
            <h3 className="twos-section-title">Expenses</h3>
            <p className="twos-section-number">${item.expenses}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Current;
