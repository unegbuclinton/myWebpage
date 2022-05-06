import React, { useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "../../../constants/fonts";
import Button from "../../atoms/Button";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const emailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o49p91f",
        "template_vk4nnxf",
        e.target,
        "SEDXk114_MP97sFbM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <ContactSection>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="contact-header"
      >
        <h1>Do you have a Project ?</h1>
        <h2> Get In Touch</h2>
      </div>

      <ContactAction
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500"
      >
        <span className="contact-action__icon">
          <AiOutlinePhone />
        </span>
        <div className="contact-action__details">
          <h1>Call Me</h1>
          <a href="tel:08030905388">08030905388</a>
        </div>
      </ContactAction>

      <ContactAction
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <span className="contact-action__icon">
          <AiOutlineMail />
        </span>
        <div className="contact-action__details">
          <h1> Email</h1>
          <a href="mailto:unegbuclinton5@gmail.com">unegbuclinton5@gmail.com</a>
        </div>
      </ContactAction>

      <ContactForm onSubmit={emailSubmit}>
        <ContactInput
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
          placeholder="Name"
          name="from_name"
        />
        <ContactInput data-aos="fade-right" placeholder="Email" name="email" />
        <ContactInput
          data-aos="fade-right"
          placeholder="Subject"
          name="subject"
        />
        <ContactTextArea
          data-aos="fade-right"
          placeholder="Message"
          name="message"
        />

        <Button className="contact-btn">Send a Message</Button>
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;

const ContactSection = styled.div`
  overflow: hidden;
  margin: 0 2rem 0 calc(2rem + 1px);
  padding: 10.4rem 0 0;

  .contact-header {
    h1 {
      text-align: center;
      font-size: ${FONTSIZES.xlarge};
      font-weight: ${FONTWEIGHTS.medium};
      margin-bottom: 0.5rem;
      color: ${COLORS["pewter-blue"]};
    }
    h2 {
      text-align: center;
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
      margin-bottom: 5rem;
      color: ${COLORS["pewter-blue"]};
    }
  }
  .contact-btn {
    width: fit-content;
    border-radius: 3px;
    padding: 1.2rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 2rem 0 calc(6rem + 1px);
    .contact-header {
      h1 {
        font-size: ${FONTSIZES.xxlarge};
      }
      h2 {
        font-size: ${FONTSIZES.lg};
      }
    }
    .contact-btn {
      font-size: 2rem;
    }
  }
`;

const ContactAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 2rem;

  .contact-action__icon {
    font-size: 2.5rem;
  }
  h1 {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS["pewter-blue"]};
    margin-bottom: 0.5rem;
  }
  a {
    font-size: ${FONTSIZES.small};
    text-decoration: none;
    color: ${COLORS["pewter-blue"]};
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: ${FONTSIZES.xlarge};
      color: ${COLORS["pewter-blue"]};
      margin-bottom: 0.5rem;
    }
    a {
      font-size: ${FONTSIZES.xxlarge};
      text-decoration: none;
      color: ${COLORS["pewter-blue"]};
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const ContactInput = styled.input`
  width: 20rem;
  height: 4.4rem;
  outline: none;
  border: none;
  border-radius: 3px;
  color: ${COLORS.white};
  background: ${COLORS["light-purple"]};
  padding: 1.5rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    width: 30rem;
    height: 7rem;
  }
`;

const ContactTextArea = styled.textarea`
  width: 25rem;
  height: 10rem;
  border-radius: 3px;
  border: none;
  outline: none;
  resize: none;
  margin-bottom: 2rem;
  padding: 1.5rem;
  color: ${COLORS.white};
  background: ${COLORS["light-purple"]};

  @media only screen and (min-width: 768px) {
    width: 40rem;
    height: 13rem;
  }
`;
