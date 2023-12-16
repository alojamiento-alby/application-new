import { Nav, Navbar } from "react-bootstrap";
import NavBarStyled from "./NavBarStyled";
import { HashLink } from "react-router-hash-link";
/* import BrandLogo from "../../../../../public/img/lg21w2.png"; */

interface NavBarProps {
  isVisible?: boolean;
}

const NavBar = ({ isVisible }: NavBarProps): React.ReactElement => {
  return (
    <NavBarStyled
      expand="lg"
      variant="dark"
      $isVisible={isVisible}
      className="navbar"
    >
      <Navbar.Brand
        as={HashLink}
        to={"/web#landscape"}
        className="navbar__brand"
      >
        <img alt="logo" src="img/lg21w2.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="navbar__collapse">
        <Nav className="navbar__nav">
          <Nav.Link as={HashLink} to={"/web#history"} className="navbar__link">
            History
          </Nav.Link>
          <Nav.Link
            as={HashLink}
            to={"/web#apartments"}
            className="navbar__link"
          >
            Apartments
          </Nav.Link>
          <Nav.Link as={HashLink} to={"/web#location"} className="navbar__link">
            Locations
          </Nav.Link>
          <Nav.Link as={HashLink} to={"/web#contact"} className="navbar__link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </NavBarStyled>
  );
};

export default NavBar;
