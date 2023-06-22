import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Result = ({ data }) => {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years
  const interestPerMonth = interestRate / 100 / 12; // 100 @ 12% for 1 year

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["principle", "interest"],
    datasets: [
      {
        label: "Ratio of principle and interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign="center" variant="h6">
        Monthly Payment: £ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

Result.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Result;
