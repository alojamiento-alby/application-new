import styled from "styled-components";

const LandscapeStyled = styled.section`
  display: flex;
  justify-content: center;

  height: 816px !important;

  .landscape {
    &__logo > img {
      width: 16rem;
      height: 16rem;

      @media (min-width: 768px) and (max-width: 991.98px) {
        width: 14rem;
        height: 14rem;
      }

      @media (min-width: 1200px) {
        width: 20rem;
        height: 20rem;
      }

      @media (min-width: 0px) and (max-width: 767.98px) {
        width: 10rem;
        height: 10rem;
      }
    }

    &__background {
      background: url("img/wonder.jpg") no-repeat center center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      filter: brightness(30%);
      height: 100%;
      width: 100%;
    }

    &__logo-container {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 2;
    }
  }
`;

export default LandscapeStyled;
