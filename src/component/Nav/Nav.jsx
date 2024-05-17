import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image1 from '../../Assets/New folder/Logo N.png'

import { Link, useNavigate } from 'react-router-dom';
import style from '../Nav/Nav.module.css'

function NavScrollExample() {
  return <>
    <div className="  d-flex  justify-content-center  gap-2 ms-3">

      <a type="button" href='https://www.instagram.com/nada.hamadaa/' className=" btn-floating btn-light m-1"><i className="fab fa-instagram"></i></a>
      {/* <!-- Twitter --> */}
      <a type="button" className=" btn-floating    m-1"><i className="fab fa-twitter"></i></a>
      {/* <!-- Facebook --> */}
      <a type="button" className=" btn-light btn-lg m-1"><i className="fab fa-facebook-f"></i></a>
    </div>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className='ms-5'><img width={60} height={70} src={Image1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll " className=' nav-underline  ms-auto' >
          <Nav
            className="  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className=' me-5' href="/ ">Home</Nav.Link>
            <Nav.Link className='me-5' href="/AllProducts">Shop</Nav.Link>
            {/* <Nav.Link className=''  href="/action3">About us</Nav.Link> */}


          </Nav>
          {/* <Form className="d-inline-flex justify-content-end">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
   
          </Form> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>;
}

export default NavScrollExample;

