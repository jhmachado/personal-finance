import React from 'react';
import ReactDOM from 'react-dom/client';
import './_shared/assets/scss/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BudgetsProvider} from "./Budgets/contexts/BudgetsContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App/>
    </BudgetsProvider>
  </React.StrictMode>
);
