import {Nav} from "react-bootstrap";
import styled from 'styled-components';

const NavWrapper = styled.div`
  transform: translateX(0px);
  height: calc(100vh - 2rem);
  margin: 1rem;
  width: 250px;
  position: fixed;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  border: none;
  border-radius: 0.75rem;
`

export const Navbar = () => {
  return (
    <NavWrapper>
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link className="nav-item" href="/"> Dashboard </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/budgets"> Budgets </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/investments"> Investments </Nav.Link>
        </Nav.Item>
      </Nav>
    </NavWrapper>
  )
}
