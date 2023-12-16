import styled from "styled-components";

const HistorySectionStyled = styled.section`
  padding: 3rem 0rem;

  .history {
    &__element-container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;

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
      padding: 0.5rem !important;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
      margin-top: 0rem;
    }

    &_element-container--info {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    &__info {
      word-break: break-word;
      overflow-wrap: break-word;
      text-align: justify;
      padding: 0.5rem;
      margin: 0;
    }
  }
`;

export default HistorySectionStyled;
