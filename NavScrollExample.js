import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavScrollExample() {

  return (
    
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MI Clothings</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '80px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="India">+91 6381610159</NavDropdown.Item>
              <NavDropdown.Item href="Facebook">
              <a href="https://www.google.com">FaceBook</a>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Instagram">
              <a href="https://www.google.com">Instagram</a>

              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="About">About</Nav.Link>
          </Nav>
          <div className="buttons">
            <a href="https://www.google.com" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login</a>
                <a href="https://www.google.com" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register</a>
                <a href="https://www.google.com" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> cart(0)</a>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavScrollExample;









