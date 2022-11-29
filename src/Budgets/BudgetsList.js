import {UNCATEGORIZED_BUDGET_ID, useBudgets} from "./contexts/BudgetsContext";
import TotalBudgetCard from "./components/TotalBudgetCard";
import BudgetCard from "./components/BudgetCard";
import {Button, Stack} from "react-bootstrap";
import {useState} from "react";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import ViewExpensesModal from "./components/ViewExpensesModal";

export const BudgetsList = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const [viewExpensesModalBudgetId, setViewExpenseModalBudgetId] = useState();
  const {budgets, getBudgetExpenses} = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto"> Budgets </h1>
        <Button
          variant="primary"
          onClick={() => setShowAddBudgetModal(true)}
        > Add Budget </Button>
        <Button
          variant="outline-primary"
          onClick={openAddExpenseModal}
        > Add Expense </Button>
      </Stack>
      <TotalBudgetCard/>
      {
        budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
              onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              onViewExpensesClick={() => setViewExpenseModalBudgetId(budget.id)}
            />
          )
        })
      }
      <UncategorizedBudgetCard
        onAddExpenseClick={openAddExpenseModal}
        onViewExpensesClick={() => setViewExpenseModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
      />
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpenseModalBudgetId()}
      />
    </>
  )
}

