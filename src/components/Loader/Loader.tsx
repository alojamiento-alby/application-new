import { Spinner } from "react-bootstrap";
import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <>
      <LoaderStyled className="loader">
        <img src="img/lg21b2.png" alt="" className="loader__logo" />
        <Spinner className="loader__spinner" />
      </LoaderStyled>
    </>
  );
};

export default Loader;
