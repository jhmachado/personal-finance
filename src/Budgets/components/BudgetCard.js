import {Button, Card, ProgressBar, Stack} from "react-bootstrap";
import {currencyFormatter} from "../../utils";

export default function BudgetCard({
   name,
   amount,
   max,
   gray,
   onAddExpenseClick,
   onViewExpensesClick,
   hideButtons,
 }) {
  const classNames = ["mb-4"];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }

  function getProgressBarVariant(amount, max) {
    const ratio = amount / max;
    if (ratio < .5) return "primary";
    if (ratio < .75) return "warning";
    return "danger";
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
              / {currencyFormatter.format(max)}
            </span>
            )}
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            > Add Expense </Button>
            <Button
              variant="outline-primary"
              onClick={onViewExpensesClick}
            > View Expenses </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
}
