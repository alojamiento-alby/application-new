import Header from "../../components/Header/Header";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <>
      <Header isVisible />
      <NotFoundPageStyled className="not-found">
        <div className="not-found__code">404 </div>
        <div className="not-found__message">Not Found </div>
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;
