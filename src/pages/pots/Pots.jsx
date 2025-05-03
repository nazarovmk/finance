import "./Pots.scss";
import PotsContains from "./PotsContains";

function Pots() {
  return (
    <section className="pots-section">
      <div className="pots-header">
        <h2 className="pots-title">Pots</h2>
        <button className="add-pot-button">+ Add New Pot</button>
      </div>
      <div className="pots-contains">
        <PotsContains />
      </div>
    </section>
  );
}

export default Pots;
