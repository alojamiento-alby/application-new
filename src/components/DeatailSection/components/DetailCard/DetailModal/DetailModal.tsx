import { useState } from "react";
import Button from "react-bootstrap/Button";
import DetailModalStyled from "./DetailModalStyled";
import Spinner from "react-bootstrap/Spinner";

interface DetailModalProps {
  galleryImage: string;
  show: boolean;
  id: number;
  showModalId: number;
  handleCloseModal: () => void;
}

const DetailModal = ({
  galleryImage,
  show,
  id,
  showModalId,
  handleCloseModal,
}: DetailModalProps): React.ReactElement => {
  const [showLoader, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <DetailModalStyled
      className="detail-modal"
      show={id === showModalId && show}
      onHide={handleCloseModal}
    >
      <DetailModalStyled.Body className="detail-modal__content">
        {showLoader && (
          <div className="detail-modal__loader-container">
            <Spinner animation="border" className="detail-modal__loader" />
          </div>
        )}

        <img
          src={galleryImage}
          alt="modal"
          onLoad={handleImageLoad}
          className="detail-modal__photo"
        />
      </DetailModalStyled.Body>
      <DetailModalStyled.Footer className="detail-modal__footer">
        <Button onClick={handleCloseModal} className="detail-modal__button">
          <span
            className="material-symbols-outlined"
            style={{
              backgroundColor: "rgb(148, 28, 47)",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            done
          </span>
        </Button>
      </DetailModalStyled.Footer>
    </DetailModalStyled>
  );
};

export default DetailModal;
