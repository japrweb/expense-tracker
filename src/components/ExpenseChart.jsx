import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPorcentage = totalIncome!== 0 ? Math.round(
    (totalExpenses / totalIncome) * 100) :100;

  const totalIncomePercentage = 100 - totalExpensesPorcentage;

  const showChart = totalIncome !== 0 || totalExpenses !== 0;

  if (!showChart) {
    return (
      <>
        <p className='text-center'>No hay datos disponibles para mostrar el gráfico.</p>
        <VictoryPie
          colorScale={["#52525b"]}
          data={[{ x: "No Data", y: 100 }]}
          animate={{
            duration: 1000,
          }}
          labels={({datum}) => `${datum.y}%`}
          labelComponent={
            <VictoryLabel
              angle={45}
              style={{
                fill: "#52525b",
              }}
            />
          }
        />
      </>
    )
  }

  return (
    <VictoryPie
      colorScale={totalExpenses < 0 ? ["#e74c3c", "#52525b"] : ["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPorcentage },
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 1000,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;