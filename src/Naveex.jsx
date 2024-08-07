import React, { useState, useContext } from 'react';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { AiOutlineHome, AiOutlineContacts, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai';
import { cartContext } from './App'; // Import your context

const Naveex = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { uid, setUid, cardlist, setCardlist } = useContext(cartContext); // Use context to manage login state

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleLogout = () => {
    localStorage.removeItem('userid');
    localStorage.removeItem('cardid');
    setUid(null);
    setCardlist([]);
    alert("Logged out successfully");
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand as={Link} to="/" className="navbar-left" style={{ fontWeight: 'bold' }}>INT Tours</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Link to="/Home" className="nav-link">
                <AiOutlineHome /> Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#contacts" className="nav-link">
                <AiOutlineContacts /> Contacts
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="#top-tours" className="nav-link">
                <AiOutlineUser /> Top Tours
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/ViewCard" className="nav-link">
                <AiOutlineQuestionCircle /> Cart
              </Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            {uid ? (
              <Button variant="light" onClick={handleLogout}>
                <AiOutlineUser /> Logout
              </Button>
            ) : (
              <Button variant="light" onClick={handleShow}>
                <AiOutlineUser /> Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            {uid ? (
              <>
                <Nav.Item>
                  <Link to="#action/3.3" className="nav-link">Favorites</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#action/3.2" className="nav-link">Settings</Link>
                </Nav.Item>
                <Nav.Item>
                  <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Link to="/Login" className="nav-link">Login</Link>
                <Nav.Item>
                  <Link to="#action/3.3" className="nav-link">Favorites</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#action/3.2" className="nav-link">Settings</Link>
                </Nav.Item>
              </Nav.Item>
              
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Naveex;
