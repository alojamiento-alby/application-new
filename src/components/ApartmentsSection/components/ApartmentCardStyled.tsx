import Card from "react-bootstrap/Card";
import styled from "styled-components";

const ApartmentCardStyled = styled(Card)<{
  $background: string;
}>`
  width: 100%;

  .apartment {
    &__photo {
      background: url(${(props) => props.$background}) no-repeat center center;
      background-position: 50% 50% !important;
      background-size: cover !important;
      height: 12rem !important;
    }

    &__body {
      padding: 1.25rem;
    }

    &__title {
      margin-bottom: 0.75rem;
    }
  }

  .btn {
    background-color: #941c2f !important;
    color: #e6e6e6 !important;
    border-color: #941c2f !important;
    border-radius: 0.25rem;
  }

  .btn:hover,
  .btn:focus {
    background-color: #e6e6e6 !important;
    color: #941c2f !important;
    border-color: #e6e6e6 !important;
  }

  .btn:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }

  li {
    margin-top: 0.5rem;
  }
`;

export default ApartmentCardStyled;
