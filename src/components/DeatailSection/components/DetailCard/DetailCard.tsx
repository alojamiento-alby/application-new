import { Button, OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import DetailCardStyled from "./DetailCardStyled";
import DetailModal from "./DetailModal/DetailModal";
import { useEffect, useState } from "react";
import apartmentsT from "../../../../assets/apartments/apartments.js";

import galleryModules from "../../../../assets/apartments/galleryCollections.js";

export interface DetailCardProps {
  detailId: number;
}

interface ImageModule {
  path: string;
  module: string | unknown;
}

const DetailCard = ({ detailId }: DetailCardProps): React.ReactElement => {
  const [imageThumbnailModules, setImageThumbnailModules] = useState<
    ImageModule[]
  >([]);
  const [imageModalsModules, setImageModalsModules] = useState<ImageModule[]>(
    [],
  );

  const detailedApartment = apartmentsT.find(
    (apartment) => apartment.id === detailId,
  );

  const detailedThumbnailModule = galleryModules.find(
    (module) => module.title === detailedApartment?.title,
  )?.thumbnails;

  const detailedModalModule = galleryModules.find(
    (module) => module.title === detailedApartment?.title,
  )?.modals;

  const [show, setShow] = useState<boolean>(false);
  const [modalIdShow, setModalIdShow] = useState<number>(NaN);
  const [load, setLoad] = useState(false);

  const handleShow: (id: number) => void = (id: number) => {
    setShow(true);
    setModalIdShow(id);
  };
  const handleClose: () => void = () => {
    setShow(false);
  };

  useEffect(() => {
    const importThumbnailPromises = Object.entries(
      detailedThumbnailModule!,
    ).map(
      ([path, importer]) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        importer().then((mod: any) => ({
          path,
          module: mod.default as string,
        })), // Adjust as needed
    );

    const importModalPromises = Object.entries(detailedModalModule!).map(
      ([path, importer]) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        importer().then((mod: any) => ({
          path,
          module: mod.default as string,
        })), // Adjust as needed
    );

    Promise.all(importThumbnailPromises)
      .then((result) => {
        setImageThumbnailModules(result);
        setLoad(true);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((_error) => {});

    Promise.all(importModalPromises)
      .then((result) => {
        setImageModalsModules(result);
        setLoad(true);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((_error) => {});
  }, [
    imageThumbnailModules,
    imageModalsModules,
    detailedThumbnailModule,
    detailedModalModule,
  ]);

  const kitchenTooltip: React.ReactNode = (
    <Tooltip id="kitchen-tooltip" className="detail-card__tooltip">
      {detailedApartment?.services.kitchen?.tooltip}
    </Tooltip>
  );

  const laundryTooltip: React.ReactNode = (
    <Tooltip id="laundry-tooltip" className="detail-card__tooltip">
      {detailedApartment?.services.laundry?.tooltip}
    </Tooltip>
  );
  const poolTooltip: React.ReactNode = (
    <Tooltip id="pool-tooltip" className="detail-card__tooltip">
      {detailedApartment?.services.pool?.tooltip}
    </Tooltip>
  );
  const smokingTtooltip: React.ReactNode = (
    <Tooltip id="smoking-tooltip" className="detail-card__tooltip">
      {detailedApartment?.services.smoking?.tooltip}
    </Tooltip>
  );
  const wifiTtooltip: React.ReactNode = (
    <Tooltip id="wifi-tooltip" className="detail-card__tooltip">
      {detailedApartment?.services.wifi?.tooltip}
    </Tooltip>
  );

  return (
    <>
      {load && (
        <DetailCardStyled className="detail-card">
          <img
            src={detailedApartment?.image.detail}
            alt=""
            className="detail-card__photo"
          />

          <DetailCardStyled.Body className="detail-card__content">
            <div className="detail-card__slider">
              {!load && <Spinner className="detail-card__spinner" />}
              {load &&
                detailedApartment?.image.galleryIds.map(
                  ({ id, imageModulePath }) => (
                    <div className="detail-card__thumbnail-container" key={id}>
                      <Button
                        type="button"
                        onClick={() => handleShow(id)}
                        className="detail-card__thumbnail"
                      >
                        <img
                          src={
                            imageThumbnailModules.find(
                              (location) =>
                                (location.path as string) ===
                                (imageModulePath as string),
                            )?.module as string
                          }
                          alt="thumbnail"
                          className="detail-card__thumbnail-photo"
                        />
                      </Button>

                      <DetailModal
                        key={id}
                        galleryImage={
                          imageModalsModules.find(
                            (location) =>
                              (location.path as string) ===
                              (imageModulePath as string),
                          )?.module as string
                        }
                        handleCloseModal={handleClose}
                        show={show}
                        id={id}
                        showModalId={modalIdShow}
                      />
                    </div>
                  ),
                )}
            </div>
            <DetailCardStyled.Text
              as={"div"}
              className="detail-card__features-container"
            >
              <DetailCardStyled.Title className="detail-card__title">
                {detailedApartment?.title}
              </DetailCardStyled.Title>
              <div className="detail-card__description-container">
                <h5>Description</h5>
                <p className="detail-card__description">
                  {detailedApartment?.description.detail}
                </p>
              </div>
              <div className="detail-card__services">
                <h5>Services</h5>
                <div className="detail-card__icons">
                  {detailedApartment?.services.kitchen && (
                    <OverlayTrigger
                      placement="bottom"
                      overlay={kitchenTooltip}
                      delay={0}
                    >
                      <span className="material-symbols-outlined">
                        {detailedApartment.services.kitchen.icon}
                      </span>
                    </OverlayTrigger>
                  )}
                  {detailedApartment?.services.laundry && (
                    <OverlayTrigger placement="bottom" overlay={laundryTooltip}>
                      <span className="material-symbols-outlined">
                        {detailedApartment.services.laundry.icon}
                      </span>
                    </OverlayTrigger>
                  )}
                  {detailedApartment?.services.pool && (
                    <OverlayTrigger placement="bottom" overlay={poolTooltip}>
                      <span className="material-symbols-outlined">
                        {detailedApartment.services.pool.icon}
                      </span>
                    </OverlayTrigger>
                  )}
                  {detailedApartment?.services.smoking && (
                    <OverlayTrigger
                      placement="bottom"
                      overlay={smokingTtooltip}
                    >
                      <span className="material-symbols-outlined">
                        {detailedApartment.services.smoking.icon}
                      </span>
                    </OverlayTrigger>
                  )}
                  {detailedApartment?.services.wifi && (
                    <OverlayTrigger placement="bottom" overlay={wifiTtooltip}>
                      <span className="material-symbols-outlined">
                        {detailedApartment.services.wifi.icon}
                      </span>
                    </OverlayTrigger>
                  )}
                </div>
              </div>
            </DetailCardStyled.Text>
          </DetailCardStyled.Body>
        </DetailCardStyled>
      )}
    </>
  );
};

export default DetailCard;
