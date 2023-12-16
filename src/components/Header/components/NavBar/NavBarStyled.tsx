import { Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavBarStyled = styled(Navbar)<{ isVisible?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;

  .navbar {
    &__nav {
      margin-top: 0.5rem;

      @media (min-width: 992px) {
        margin-top: 0;
      }
    }

    &__brand {
      visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
      opacity: ${(props) => (props.$isVisible ? "1" : "0")};
      transition: all 0.2s ease-in;
      padding: 0;
      > img {
        height: 3rem;
        width: 6rem;
      }
    }

    &__collapse {
      color: rgba(255, 255, 255, 0.5);
      flex-grow: 0;
      align-items: center;
    }

    &__link {
      padding: 0.5rem;
      font-size: 1rem !important;
      font-weight: 400;
    }
  }
`;

export default NavBarStyled;
