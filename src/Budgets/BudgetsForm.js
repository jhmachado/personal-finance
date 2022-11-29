import {Button, Form, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import {useBudgets} from "./contexts/BudgetsContext";
import AddExpenseModal from "./components/AddExpenseModal";

export const BudgetsForm = () => {
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();

  const nameRef = useRef();
  const maxRef = useRef();
  const {addBudget} = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
  }

  return (
    <>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto"> New Budget </h1>
        <Link to="/budgets"> Back </Link>
      </Stack>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label> Name </Form.Label>
          <Form.Control type="text" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="max">
          <Form.Label> Maximum Spending </Form.Label>
          <Form.Control
            type="number"
            required
            min={0}
            step={0.01}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="outline-primary"
                  onClick={openAddExpenseModal}
                  type="button"
          > View Expenses </Button>
          <Button variant="primary" type="submit"> Save </Button>
        </div>
      </Form>
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
    </>
  )
}
