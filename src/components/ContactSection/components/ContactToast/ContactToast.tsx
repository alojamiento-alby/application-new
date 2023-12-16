import ContactToastStyled from "./ContactToastStyled";

interface ToastProps {
  show: boolean;
  success: boolean;
}

const ContactToast = ({ show, success }: ToastProps): React.ReactElement => {
  return (
    <ContactToastStyled className="contact-toast" show={show}>
      {success ? (
        <ContactToastStyled.Body className="contact-toast__content ">
          Message has been sent
        </ContactToastStyled.Body>
      ) : (
        <ContactToastStyled.Body className="contact-toast__content">
          Message could not be sent. Please, try again
        </ContactToastStyled.Body>
      )}
    </ContactToastStyled>
  );
};

export default ContactToast;
