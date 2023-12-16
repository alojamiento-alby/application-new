import styled from "styled-components";

const LoaderStyled = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10000;
  overflow-y: hidden !important;

  .loader {
    &__logo {
      width: 10rem;
      height: 5rem;
    }

    &__spinner {
      padding-top: -5rem;
    }
  }
`;

export default LoaderStyled;
