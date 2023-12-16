import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
