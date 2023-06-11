import { useRef } from "react";

import emailjs from "@emailjs/browser";

import classes from "./Contact.module.scss";

import SectionTitle from "../../UI/SectionTitle";
import UnderLine from "../../UI/Underline";
import Button from "../../UI/Button";

import planet from "../../assets/planet.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qh3exxv",
        "template_7n3tjuj",
        form.current,
        "M13kriwMFR4XjrAq9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <SectionTitle title="CONTACT ME" />
      <div className={classes.container}>
        <div className={classes.planet}>
          <img src={planet} alt="" />
          <UnderLine className={classes.email}>Mateeb2000@gmail.com</UnderLine>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={classes.form}
          id="contact"
        >
          <input
            className={classes}
            type="text"
            name="user_name"
            placeholder="Name"
          />

          <input type="email" name="user_email" placeholder="Email" />

          <textarea name="message" placeholder="Message" rows="7" />
          <Button button={true} className={classes.button}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
