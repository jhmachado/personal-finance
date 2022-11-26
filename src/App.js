import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./Dashboard";
import {Navbar} from "./_shared/components/Nav";
import styled from 'styled-components';
// import * as Budgets from "./Budgets";

const Content = styled.div`
  left: calc(250px + 2rem);
  position: relative;
  padding: 1rem 0;
  width: calc(100% - 250px - 2rem);
`

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Content>
          <header></header>
          <Routes>
            {/*<Route path="/budgets" element={<Budgets />} />*/}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </>
  );
}

export default App;
