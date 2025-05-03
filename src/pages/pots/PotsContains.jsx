import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";

function PotsContains() {
  const { data, isPending } = useCollection("pots");
  const [activeId, setActiveId] = useState(null);

  const toggleDropdown = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <>
      {data.map((p) => {
        const percentage = Math.min((p.total / p.target) * 100, 100).toFixed(2);

        return (
          <div key={p.id}>
            <div className="item-container">
              <div className="item-nav">
                <span className="item-wrapper">
                  <p
                    className="item-border"
                    style={{
                      backgroundColor: p.theme,
                    }}
                  ></p>
                  <p className="item-name">{p.name}</p>
                </span>

                <span className="menu-wrapper">
                  <img
                    src="./icon-ellipsis.svg"
                    alt="menu"
                    className="menu-icon"
                    onClick={() => toggleDropdown(p.id)}
                  />
                  {activeId === p.id && (
                    <div className="menu-dropdown">
                      <p className="menu-item">Edit Post</p>
                      <hr />
                      <p className="menu-item delete">Delete Post</p>
                    </div>
                  )}
                </span>
              </div>

              <div className="details-top">
                <p className="target-text">Target of ${p.target}</p>
                <p className="saved-text">Total Saved: ${p.total}</p>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: p.theme,
                  }}
                ></div>
              </div>

              <div className="percentage-text">
                <p>{percentage}%</p>
              </div>

              <div className="btn-wrapper">
                <button className="pots-btn">+ Add Money</button>
                <button className="pots-btn">Withdraw</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PotsContains;
