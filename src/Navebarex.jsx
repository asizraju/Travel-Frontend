import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarex() {
  return (
    <Navbar expand="lg" className="" style={{ backgroundColor: "#d9ebdd"  }}>
      <Container fluid >
        <Navbar.Brand href="/" style={{ fontWeight: 'bold' }}>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px',}}
            navbarScroll
          >

          </Nav>
          <div className='d-flex justify-content-center ' style={{gap:"20px",padding:'10px',fontWeight:"200px"}}>
          <Nav.Link href="/" className='btn btn-dark' style={{ width: "50px",}}>Home</Nav.Link></div>
          <div className='d-flex justify-content-center ' style={{gap:"20px",padding:'10px',fontWeight:"200px"}}>
          <Nav.Link href="/Details" className='btn btn-dark' style={{ width: "80px" }}>UserDetails</Nav.Link>
          </div>
          {/* <div className='d-flex justify-content-center ' style={{gap:"20px",padding:'10px',fontWeight:"200px"}}>
          <Nav.Link href="/ViewCard" className='btn btn-dark' style={{ width: "60px" }}>Cart</Nav.Link> */}
          {/* </div> */}
          {/* <div className='d-flex justify-content-center ' style={{gap:"20px",padding:'10px',fontWeight:"200px"}}>
          <Nav.Link href="/ViewCard" className='btn btn-dark' style={{ width: "60px" }}>Cart</Nav.Link>
          </div> */}
          
          
            
            
            {/* <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Login">Log in/Sign up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                INT Rewords
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Language</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Help
              </NavDropdown.Item>
            </NavDropdown> */}
            

            {/* <div class="btn-group d-flex justify-content-center">
              <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                profile
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
              <NavDropdown.Item href="/Login">Log in/Sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Language</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Help</NavDropdown.Item>
              </ul>
            </div> */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default Navbarex;
