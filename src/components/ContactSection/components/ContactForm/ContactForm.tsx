import { useRef, useState } from "react";
import ContactFormStyled from "./ContactFormStyled";

import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import ContactToast from "../ContactToast/ContactToast";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = (): React.ReactElement => {
  const refCaptcha = useRef<ReCAPTCHA>(null);
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITEKEY;

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [show, setShow] = useState<boolean>(false);

  const [success, setSuccess] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await refCaptcha.current?.executeAsync();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY;

    const templateParams = {
      contact_name: formValues.name,
      from_email: formValues.email,
      message: formValues.message,
      "g-recaptcha-response": token,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((_response) => {
        setSuccess(true);
        setShow(true);
        setFormValues({ name: "", email: "", message: "" });
        refCaptcha.current?.reset();
        setTimeout(() => {
          setShow(false);
        }, 2000);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((_error) => {
        setSuccess(false);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 2000);
      });
  };

  return (
    <ContactFormStyled className="form" id="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="inputName" className="form__label">
          Name
        </label>
        <div className="form__control-container">
          <input
            type="text"
            className="form__control"
            id="inputName"
            placeholder="Mary Elizabeth"
            required
            name="contact_name"
            value={formValues.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({
                ...formValues,
                name: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="inputEmail" className="form__label">
          Email
        </label>
        <div className="form__control-container">
          <input
            type="email"
            className="form__control"
            id="inputEmail"
            placeholder="example@gmail.com"
            required
            name="form_email"
            value={formValues.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({
                ...formValues,
                email: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="inputText" className="form__label">
          Message
        </label>
        <div className="form__control-container">
          <textarea
            className="form__control form__control--message"
            id="inputText"
            placeholder="Write wonders here"
            name="message"
            value={formValues.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormValues({
                ...formValues,
                message: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="form__group">
        {
          <div className="form__control-container form__control-container--btn">
            <ReCAPTCHA
              sitekey={recaptchaKey}
              ref={refCaptcha}
              size="invisible"
            />
          </div>
        }
      </div>
      <div className="form__group">
        <div className="form__control-container form__control-container--btn">
          <Button type="submit" className="form__control--btn">
            Contact us
          </Button>
        </div>
      </div>

      <div className="form__contact-toast-container">
        <ContactToast success={success} show={show} />
      </div>
    </ContactFormStyled>
  );
};

export default ContactForm;
