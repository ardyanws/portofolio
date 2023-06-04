import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

import mylogo from '../assets/img/mylogo.png';

import {navLinks} from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if(window.scrollY > 10){
      setChangeColor(true);
    }else{
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  })

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? 'color-active' : ''}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold d-flex align-items-center">
          <span className="ms-3">My Portofolio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {/* parameternya (link) bebas ya */}
              {navLinks.map((link) => {
                return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                  } end>{link.text}
                  </NavLink>
                </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents