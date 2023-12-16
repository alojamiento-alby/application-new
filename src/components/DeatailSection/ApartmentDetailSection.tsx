import ApartmentDetailSectionStyled from "./ApartmentDetailSectionStyled";
import DetailCard from "./components/DetailCard/DetailCard";

interface ApartmentDetailSectionProps {
  id: number;
  visibility: boolean;
}

const ApartmentDetailSection = ({
  id,
  visibility,
}: ApartmentDetailSectionProps): React.ReactElement => {
  return (
    <>
      {id && (
        <ApartmentDetailSectionStyled
          className="apartment-detail"
          $visibility={visibility}
        >
          <div className="apartment-detail__container">
            <article className="apartment-detail__content">
              <div className="apartment-detail__card-container">
                <DetailCard detailId={id} />
              </div>
              <aside className="apartment-detail__booking-links-container">
                <span className="apartment-detail__booking-links-heading">
                  Reservations
                </span>
                <div className="apartment-detail__booking-links">
                  <div className="apartment-detail__booking-link-container">
                    <a
                      href="https://www.booking.com/hotel/es/alojamiento-alby-oceano.es.html?aid=D1258472"
                      className="apartment-detail__booking-link apartment-detail__booking-link--booking"
                    >
                      booking
                    </a>
                  </div>
                  <div className="apartment-detail__booking-link-container">
                    <a
                      href="https://www.airbnb.es/rooms/35762364?s=67&shared_item_type=1&virality_entry_point=1"
                      className="apartment-detail__booking-link apartment-detail__booking-link--airbnb"
                    >
                      airbnb
                    </a>
                  </div>
                  <div className="apartment-detail__booking-link-container">
                    <a
                      href="https://www.vrbo.com/es-es/p10400731?vgdc=HAES&preferlocale=true&noDates=true&utm_source=direct&utm_medium=social&utm_campaign=earned:homeaway:sharecopylink:ESP&utm_content=10400731"
                      className="apartment-detail__booking-link apartment-detail__booking-link--homeaway"
                    >
                      homeaway
                    </a>
                  </div>
                  <div className="apartment-detail__booking-link-container">
                    <a
                      href="https://www.tripadvisor.es/VacationRentalReview-g659661-d17698053-Alojamiento_Alby_Oceano-Los_Cristianos_Arona_Tenerife_Canary_Islands.html"
                      className="apartment-detail__booking-link apartment-detail__booking-link--tripadvisor"
                    >
                      tripadvisor
                    </a>
                  </div>
                </div>
              </aside>
            </article>
          </div>
        </ApartmentDetailSectionStyled>
      )}
    </>
  );
};

export default ApartmentDetailSection;
