import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./Dashboard";
import {Navbar} from "./_shared/components/Nav";
import styled from 'styled-components';
import {BudgetsList} from "./Budgets";
import {Investments} from "./Investments";
import {Header} from "./_shared/components/Header";
import {BudgetsProvider} from "./Budgets/contexts/BudgetsContext";
import {BudgetsForm} from "./Budgets/BudgetsForm";

const Content = styled.div`
  left: calc(250px + 2rem);
  position: relative;
  width: calc(100% - 250px - 3rem);
  min-height: calc(100vh - 2rem);
  top: 1rem;
`

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Content>
          <BudgetsProvider>
            <Routes>
              <Route path="/budgets" element={<BudgetsList/>}/>
              <Route path="/budgets/new" element={<BudgetsForm/>}/>
            </Routes>
          </BudgetsProvider>
          <Routes>
            <Route path="/investments"
                   element={<Investments/>}/>
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </Content>
      </BrowserRouter>
    </>
  );
}

export default App;
