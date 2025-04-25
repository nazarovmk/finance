import ReactApexChart from "react-apexcharts";
import { useCollectionsData } from "../../hooks/useCollectionsData";

const ApexChart = () => {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.budgets)) {
    return null;
  }

  const labels = data.budgets.map((budget) => budget.category);
  const series = data.budgets.map((budget) => budget.maximum);
  const colors = data.budgets.map((budget) => budget.theme);

  const total = series.reduce((a, b) => a + b, 0);
  const spent = series.reduce((a, b) => a + b, 0);

  const options = {
    chart: {
      type: "donut",
    },
    labels,
    colors,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div style={{ position: "relative", width: "300px", height: "300px" }}>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={300}
          height={300}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          ${spent.toFixed(2)}
          <div
            style={{ fontSize: "12px", fontWeight: "normal", color: "#888" }}
          >
            of ${total.toFixed(2)} limit
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {labels.map((label, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            <div
              style={{
                width: "4px",
                height: "43px",
                backgroundColor: colors[index],
                borderRadius: "8px",
              }}
            ></div>
            <div style={{ fontSize: "16px" }}>
              <div
                style={{
                  fontWeight: 400,
                  marginBottom: "4px",
                  fontSize: "12px",
                  color: "#696868",
                }}
              >
                {label}
              </div>
              <div style={{ color: "#201F24", fontWeight: 700 }}>
                ${series[index].toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApexChart;
