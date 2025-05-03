import "./RecurringBils.scss";

function RecurringBils() {
  return (
    <section className="Recurring-section">
      <h2 className="recurring-title">Recurring Bills</h2>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-left-top-container">
            <div className="cart-left-top">
              <img src="./icon-recurring-bills.svg" alt="" />
            </div>
          </div>

          <div className="cart-left-bottom-container">
            <div className="cart-left-bottom"></div>
          </div>
        </div>
        <div className="cart-right"></div>
      </div>
    </section>
  );
}

export default RecurringBils;
