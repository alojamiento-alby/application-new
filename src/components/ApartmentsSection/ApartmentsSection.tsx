import apartmentsT from "../../assets/apartments/apartments";
import ApartmentsSectionStyled from "./ApartmentsSectionStyled";
import ApartmentCard from "./components/ApartmentCard";

const ApartmentsSection = (): React.ReactElement => {
  const apartmentsLength = apartmentsT.length;
  return (
    <ApartmentsSectionStyled
      className="apartments"
      $itemCount={apartmentsLength}
      id="apartments"
    >
      <div className="apartments__element-container">
        <h1 className="apartments__heading">Apartments</h1>
      </div>
      <ul className="apartments__element-container apartments__list ">
        {apartmentsT.map((apartment) => (
          <li key={apartment.id}>
            <ApartmentCard
              photo={apartment.image.preview}
              id={apartment.id}
              apartmentDescription={apartment.description.preview}
              apartmentTitle={apartment.title}
            />
          </li>
        ))}
      </ul>
    </ApartmentsSectionStyled>
  );
};

export default ApartmentsSection;
