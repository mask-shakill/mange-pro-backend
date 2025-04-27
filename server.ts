import express, { Request, Response } from "express";

type Revenue = number;
type Expenses = number;
type Profit = number;

const calculateNetProfit = (revenue: Revenue, expenses: Expenses): Profit => {
  return revenue - expenses;
};

const app = express();
const port = 3000;

app.get("/calculate", (_req: Request, res: Response) => {
  const revenue: Revenue = 100000;
  const expenses: Expenses = 75000;

  const netProfit: Profit = calculateNetProfit(revenue, expenses);

  res.json({
    revenue,
    expenses,
    netProfit,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
