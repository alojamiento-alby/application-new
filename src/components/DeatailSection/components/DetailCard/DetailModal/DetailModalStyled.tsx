import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const DetailModalStyled = styled(Modal)`
  .detail-modal {
    &--hidden {
      display: none;
    }

    &__content {
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      flex: 1 1 auto;
      padding: 1rem;
    }

    &__loader-container {
      margin-top: 1.5rem;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }

    &__loader {
      color: #941c2f;
    }

    &__photo {
      width: 100%;
    }

    &__footer {
      border: none;
    }

    &__button {
      background-color: #941c2f;
      border: none;
      border-radius: 0.25rem;

      &:active {
        background-color: #941c2f;
      }
    }
  }

  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
  }
`;

export default DetailModalStyled;
