import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import "./Transactions.scss";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

function Transactions() {
  const { data } = useCollection("transactions");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Latest");
  const [categoryOption, setCategoryOption] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredData = data
    ?.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchCategory =
        categoryOption === "All" || item.category === categoryOption;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "Oldest":
          return new Date(a.date) - new Date(b.date);
        case "A to Z":
          return a.name.localeCompare(b.name);
        case "Z to A":
          return b.name.localeCompare(a.name);
        case "Highest":
          return b.amount - a.amount;
        case "Lowest":
          return a.amount - b.amount;
        default:
          return new Date(b.date) - new Date(a.date); // Latest
      }
    });

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="Transactions-container">
      <h2 className="transactions-title">Transactions</h2>
      <div className="transactions-menu">
        <div className="transactions-menu-wrap">
          <div className="input-wrapper">
            <input
              className="transactions-inp"
              type="text"
              placeholder="Search transaction"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <img src="./icon-search.svg" alt="Search" className="search-icon" />
          </div>
          <div className="transactions-navmenu">
            <div className="transactions-select">
              <p className="tran-text">Sort by</p>
              <select
                className="select"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
            </div>
            <div className="transactions-select">
              <p className="tran-text">Category</p>
              <select
                className="select"
                value={categoryOption}
                onChange={(e) => {
                  setCategoryOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="All">All Transactions</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Groceries">Groceries</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>
          </div>
        </div>

        <div className="nav-transaction">
          <div className="nav-text">Recipient / Sender</div>
          <div className="nav-text">Category</div>
          <div className="nav-text">Transaction Date</div>
          <div className="nav-text nav-text-end">Amount</div>
        </div>

        <div>
          {paginatedData?.map((trans, index) => (
            <div key={index} className="index">
              <div className="transactions-information">
                <div className="info-block name-block">
                  <img src={trans.avatar} alt="" />
                  <h3 className="ava-title">{trans.name}</h3>
                </div>
                <div className="info-block category-block">
                  <h3 className="category-date">{trans.category}</h3>
                </div>
                <div className="info-block date-block">
                  <h3 className="category-date">{formatDate(trans.date)}</h3>
                </div>
                <div className="info-block amount-block">
                  <h3
                    className="amount"
                    style={{
                      color: trans.amount < 0 ? "#000000" : "#277c78",
                    }}
                  >
                    {trans.amount < 0
                      ? `-$${Math.abs(trans.amount)}`
                      : `$${trans.amount}`}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="front-back">
          <div>
            <button
              className="prev-next"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icon"
              >
                <path d="M10 2L4 8l6 6" />
              </svg>
              Prev
            </button>
          </div>
          <div className="num-page-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`num-page ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => handlePageClick(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div>
            <button
              className="prev-next"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icon"
              >
                <path d="M6 2l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transactions;
