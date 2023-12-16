import styled from "styled-components";

const ApartmentDetailSectionStyled = styled.main<{ $visibility: boolean }>`
  padding: 3rem 15px;

  background-color: #f8f9fa;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: ${(props) => (props.$visibility ? "none" : "block")};

  .apartment-detail {
    &__container {
      width: 100%;
      padding: 0;
      margin-right: auto;
      margin-left: auto;

      overflow-x: hidden;

      @media (min-width: 576px) {
        max-width: 540px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }

    &__card-container {
      margin-bottom: 3rem;
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;

      @media (min-width: 768px) {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
      }
    }

    &__booking-links-container {
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;

      @media (min-width: 768px) {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
      }
    }

    &__booking-links-heading {
      padding: 1rem;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    &__booking-links {
      flex-direction: column;
      display: flex;
    }

    &__booking-link-container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &__booking-link {
      color: #e6e6e6 !important;
      font-weight: 300 !important;
      display: block;
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      font-weight: 400 !important;
      line-height: 1.5;
      border-radius: 0.3rem;
      text-transform: capitalize;
      text-decoration: none;
      border: 1px solid transparent;
    }

    &__booking-link--booking {
      background-color: #003580 !important;
    }
    &__booking-link--airbnb {
      background-color: #ff5a5f !important;
    }
    &__booking-link--homeaway {
      background-color: #0067db !important;
    }
    &__booking-link--tripadvisor {
      background-color: #00af87 !important;
    }
  }
`;

export default ApartmentDetailSectionStyled;
