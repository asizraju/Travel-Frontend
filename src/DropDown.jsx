import Nav from 'react-bootstrap/Nav';

export function DropDown() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">
          Top activites</Nav.Link>
        <div class="dropdown">

          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
          </ul>
        </div>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Top landmarks</Nav.Link>
        <div class="dropdown">

          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
          </ul>
        </div>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Explore the world</Nav.Link>
        <div class="dropdown">

          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
          </ul>
        </div>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Weekend Trips</Nav.Link>
        <div class="dropdown">

          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
            <li><button class="dropdown-item" type="button">Dropdown item</button></li>
          </ul>
        </div>
      </Nav.Item>
    </Nav>



    // <Accordion>
    //       <Accordion.Item eventKey="0">
    //         <Accordion.Header>Accordion Item #1</Accordion.Header>
    //         <Accordion.Body>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //           aliquip ex ea commodo consequat. Duis aute irure dolor in
    //           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //           culpa qui officia deserunt mollit anim id est laborum.
    //         </Accordion.Body>
    //       </Accordion.Item>
    //       <Accordion.Item eventKey="1">
    //         <Accordion.Header>Accordion Item #2</Accordion.Header>
    //         <Accordion.Body>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //           aliquip ex ea commodo consequat. Duis aute irure dolor in
    //           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //           culpa qui officia deserunt mollit anim id est laborum.
    //         </Accordion.Body>
    //       </Accordion.Item>
    //     </Accordion>

  );
}

