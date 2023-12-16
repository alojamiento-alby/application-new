import { Button } from "react-bootstrap";
import ApartmentCardStyled from "./ApartmentCardStyled";
import { Link } from "react-router-dom";
import apartments from "../../../assets/apartments/apartments";

interface ApartmentCardProps {
  photo: string;
  id: number;
  apartmentTitle: string;
  apartmentDescription: string;
}

const ApartmentCard = ({
  photo,
  id,
  apartmentDescription,
  apartmentTitle,
}: ApartmentCardProps): React.ReactElement => {
  const isId: boolean = apartments.some((apartment) => apartment.id === id);

  return (
    <ApartmentCardStyled className="apartment-card" $background={photo}>
      <div className="apartment__photo"></div>
      <ApartmentCardStyled.Body className="apartment__body">
        <ApartmentCardStyled.Title className="apartment__title">
          {apartmentTitle}
        </ApartmentCardStyled.Title>
        <ApartmentCardStyled.Text>
          {apartmentDescription}
        </ApartmentCardStyled.Text>
        {isId ? (
          <Link to={`/apartment/${id}`}>
            <Button>+ Info</Button>
          </Link>
        ) : (
          <Link to={`/404`}>
            <Button>+ Info</Button>
          </Link>
        )}
      </ApartmentCardStyled.Body>
    </ApartmentCardStyled>
  );
};

export default ApartmentCard;
