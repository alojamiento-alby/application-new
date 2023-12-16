import styled from "styled-components";

const ApartmentsSectionStyled = styled.section<{
  $itemCount: number;
}>`
  padding: 3rem 0rem;
  background-color: #f8f9fa !important;

  .apartments {
    &__element-container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      justify-content: flex-start;

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

    &__heading {
      padding: 1rem;
      padding-left: 0rem;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
      margin-top: 0rem;
    }

    &__list {
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 0;
      }
    }
  }

  li {
    list-style: none;
    width: 100%;
    padding: 0;
    margin-top: 1rem;
    width: 100%;

    @media (min-width: 768px) and (max-width: 991.98px) {
      width: 20rem;
    }

    @media (min-width: 992px) {
      width: ${(props) =>
        props.$itemCount === 2
          ? "45%"
          : props.$itemCount >= 3
          ? "30%"
          : "20rem"};
    }
  }

  ul {
  }
`;

export default ApartmentsSectionStyled;
