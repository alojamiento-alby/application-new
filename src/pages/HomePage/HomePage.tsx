import { useInView } from "react-intersection-observer";
import ApartmentsSection from "../../components/ApartmentsSection/ApartmentsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Header from "../../components/Header/Header";
import HistorySection from "../../components/HistorySection/HistorySection";
import Landscape from "../../components/Landscape/Landscape";

import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <HomePageStyled className="homepage">
        <Header isVisible={inView} />
        <main className="homepage__content">
          <Landscape />
          <HistorySection />
          <div className="homepage__logo-visibility-container" ref={ref}>
            <ApartmentsSection />
            <div className="homepage__geolocation-container" id="location">
              <iframe
                className="homepage__geolocation"
                src="https://www.google.com/maps/d/embed?mid=1gbnhlTlTPOJIO-mlcemMC_uEpuTh3TwX&ehbc=2E312F"
                title="location"
              ></iframe>
            </div>
            <ContactSection />
          </div>
        </main>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
