import { useEffect, useState } from "react";
import logo from './assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSun, FaMoon } from "react-icons/fa";


function Menubar() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode])

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          expand="lg"
          className={`sticky top-0 z-50 py-3 transition-colors ${darkMode ? "navbar-dark bg-gray-900" : "navbar-light bg-white"}`}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo} alt="Logo"
                className={`w-32 transition-all duration-300
                ${darkMode ? "filter-none" : "brightness-0 sepia saturate-200 hue-rotate-[300deg]"}`} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto gap-3 align-items-center">
                  <Nav.Link href="#demos">Demos</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#elements">Elements</Nav.Link>
                  <Nav.Link href="#documentation">Documentation</Nav.Link>
                  <Nav.Link href="#support">Support</Nav.Link>
                  <Nav.Link href="#faqs">Faq's</Nav.Link>
                  <button className='rounded-pill px-4 py-2 text-white font-semibold
                    bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                    transition-all duration-300
                    hover:shadow-lg hover:shadow-pink-500/50
                    hover:scale-105
                  '>
                    Buy Now
                  </button>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`ml-2 p-2 !rounded-full 
                      ${!darkMode ? "bg-orange-500" : "bg-orange-500"}`}
                    aria-label="Toggle dark mode">
                    {darkMode ? (
                      <FaSun className="text-white text-lg" />
                    ) : (
                      <FaMoon className="text-white" />
                    )}
                  </button>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menubar;
