import { useParams } from "react-router-dom";
import ApartmentDetailSection from "../../components/DeatailSection/ApartmentDetailSection";

import Header from "../../components/Header/Header";
import GoToTop from "../../utils/GoToTop";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";

const ApartmentPage = (): React.ReactElement => {
  const { apartmentId } = useParams();
  const apartmentIdNumber: number = Number(apartmentId);

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <>
      <GoToTop />
      {!show && <Loader />}
      <Header isVisible={true} />
      <ApartmentDetailSection id={apartmentIdNumber} visibility={!show} />
    </>
  );
};

export default ApartmentPage;
