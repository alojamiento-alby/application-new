import ContactSectionStyled from "./ContactSectionStyled";
import ContactForm from "./components/ContactForm/ContactForm";

const ContactSection = (): React.ReactElement => {
  return (
    <ContactSectionStyled className="contact" id="contact">
      <div className="contact__element-container">
        <h1 className="contact__heading">Contact</h1>
        <ContactForm />
      </div>
    </ContactSectionStyled>
  );
};

export default ContactSection;
