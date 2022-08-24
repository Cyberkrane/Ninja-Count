import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";

const nav_Bar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              <Nav.Link as={Link} to="/Register">Register</Nav.Link>
              <Nav.Link as={Link} to="/Ingresos">Ingresos</Nav.Link>
              <Nav.Link as={Link} to="/Gastos_fijos">Gastos fijos</Nav.Link>
              <Nav.Link as={Link} to="/Gastos_diarios">Gastos diarios</Nav.Link>
              <Nav.Link as={Link} to="/Logros_Angel">Logros Angel</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <section>
        
        <Outlet></Outlet>
      </section>
      
    </>
    
    )
}

export default nav_Bar