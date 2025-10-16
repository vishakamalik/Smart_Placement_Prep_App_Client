import { PieChart } from "@mui/x-charts/PieChart";
import "./index.css";
import { green, red } from "@mui/material/colors";
const PieContainer = (props) => {
  const { earn = 0 } = props;
  const data = [
    { id: 0, value: earn, label: "Correct", color: green[500] },
    { id: 1, value: 100 - earn, label: "InCorrect", color: red[600] },
  ];

  return (
    <div className="pie-container">
      <PieChart
        series={[{ data: data, labelColor: "#ffffff" }]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default PieContainer;
