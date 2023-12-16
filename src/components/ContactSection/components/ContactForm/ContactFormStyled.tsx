import styled from "styled-components";

const ContactFormStyled = styled.form`
  .form {
    &__group {
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      margin-bottom: 1rem;
    }

    &__label {
      padding-top: calc(0.375rem + 1px);
      padding-bottom: calc(0.375rem + 1px);
      margin-bottom: 0;
      font-size: inherit;
      line-height: 1.5;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      color: #343a40 !important;

      @media (min-width: 576px) {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
      }
    }

    &__control-container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;

      @media (min-width: 576px) {
        flex: 1;
      }

      &--btn {
        margin-top: 7px;
        @media (min-width: 576px) {
          padding-left: calc(16.666667% + 15px);
        }
      }
    }

    &__control {
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition:
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;

      &--btn {
        background-color: #941c2f !important;
        color: #e6e6e6 !important;
        border-color: #941c2f !important;
        border-radius: 0.25rem;
        font-weight: 400;
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;

        &:hover {
          background-color: #e6e6e6 !important;
          border-color: #e6e6e6 !important;
          color: #941c2f !important;
        }

        &:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          outline: 0;
        }
      }

      &--message {
        height: auto;
      }
    }

    &__contact-toast-container {
      padding: 1rem;
      right: 0;
      top: 1.5rem;
      position: absolute;
    }
  }
`;

export default ContactFormStyled;
