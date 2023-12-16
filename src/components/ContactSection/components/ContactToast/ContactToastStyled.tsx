import { Toast } from "react-bootstrap";
import styled from "styled-components";

const ContactToastStyled = styled(Toast)`
  width: 100%;

  .contact-toast {
    &__content {
      border-radius: 5px;
      border-style: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background: #333333;
    }
  }
`;

export default ContactToastStyled;
