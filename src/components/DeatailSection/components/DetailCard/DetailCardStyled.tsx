import { Card } from "react-bootstrap";
import styled from "styled-components";

const DetailCardStyled = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  & > img {
    width: 100%;
  }

  .detail-card {
    &__content {
      padding: 0;
      flex: 1 1 auto;
    }

    &__slider {
      margin-top: 0.25rem;
      margin-left: 0;
      margin-right: 0;
      overflow: auto;
      flex-wrap: nowrap;
      display: flex;
      position: relative;
    }

    &__spinner {
      position: absolute;
      left: 45%;
      top: 25%;
      padding: 10px 0;
    }

    &__link-container {
      margin-right: 0.25rem;
      display: inline-block;
    }

    &__link {
      text-decoration: none;
      background-color: transparent;
    }

    &__link-picture {
      height: 5rem;
      width: auto;
      vertical-align: middle;
      border-style: none;
    }

    &__thumbnail-container {
      margin-right: 0.25rem;
    }

    &__thumbnail {
      border: none;
      padding: 0;
      background-color: transparent !important;
      border-color: transparent !important;
      height: auto;
    }

    &__thumbnail-photo {
      height: 5rem;
      width: auto;
      background-color: transparent;
      border-color: transparent;
    }

    &__features-container {
      margin-bottom: 0;
      padding: 3rem 1rem;
    }

    &__title {
      text-transform: capitalize !important;
      padding-bottom: 1.5rem !important;
      border-bottom: 1px solid #dee2e6 !important;
      margin-bottom: 0.75rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.2;
    }

    &__description-container {
      padding-bottom: 1.5rem !important;
      padding-top: 1.5rem !important;
    }

    &__description {
      text-align: justify;
    }

    &__icons {
      padding: 0.25rem 0;
      display: flex;
      gap: 0.25rem;
    }
  }
`;

export default DetailCardStyled;
