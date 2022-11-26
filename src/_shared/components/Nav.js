import {Nav} from "react-bootstrap";
import styled from 'styled-components';

const NavWrapper = styled.div`
  background-color: #256EFF;
  transform: translateX(0px);
  height: calc(100vh - 2rem);
  margin: 1rem;
  width: 250px;
  position: fixed;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  border: none;
  border-radius: 0.75rem;
`

export const Navbar = () => {
  return (
    <NavWrapper>
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link className="nav-item" href="/" style={{ color: 'white' }}> Dashboard </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/budgets" style={{ color: 'white' }}> Budgets </Nav.Link>
        </Nav.Item>
      </Nav>
    </NavWrapper>
  )
}
