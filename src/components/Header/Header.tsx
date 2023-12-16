import HeaderStyled from "./HeaderStyled";
import NavBar from "./components/NavBar/NavBar";

interface HeaderProps {
  isVisible?: boolean;
}

const Header = ({ isVisible }: HeaderProps): React.ReactElement => {
  return (
    <HeaderStyled>
      <NavBar isVisible={isVisible} />
    </HeaderStyled>
  );
};

export default Header;
