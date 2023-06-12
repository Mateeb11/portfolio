import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isEmail";

import classes from "./Contact.module.scss";

import SectionTitle from "../../UI/SectionTitle";
import UnderLine from "../../UI/Underline";
import Button from "../../UI/Button";

import planet from "../../assets/planet.png";
import heart from "../../assets/blue-heart.svg";

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

  const [isSent, setIsSent] = useState(false);

  const [isSubmitted, setSubmitted] = useState(false);

  const [isNameValid, setIsNameValid] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isMessageValid, setIsMessageValid] = useState(false);

  const errorHandler = (event) => {
    if (event.target.name === "user_email") {
      if (isEmail(event.target.value)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    } else if (event.target.name === "user_name") {
      if (event.target.value === "") {
        setIsNameValid(false);
      } else {
        setIsNameValid(true);
      }
    } else {
      if (event.target.value === "") {
        setIsMessageValid(false);
      } else {
        setIsMessageValid(true);
      }
    }
  };

  const errorMessage =
    !isNameValid || !isMessageValid
      ? "Please fill all the fields"
      : !isEmailValid
      ? "Please enter a valid email"
      : ".";
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
          className={`${classes.form} ${isSent && classes.removeForm}`}
          id="contact"
        >
          <input
            className={!isNameValid & isSubmitted && classes.errorLine}
            type="text"
            name="user_name"
            placeholder="Name"
            onChange={errorHandler}
          />

          <input
            className={!isEmailValid & isSubmitted && classes.errorLine}
            type="email"
            name="user_email"
            placeholder="Email"
            onChange={errorHandler}
          />

          <textarea
            className={!isMessageValid & isSubmitted && classes.errorLine}
            name="message"
            placeholder="Message"
            rows="7"
            onChange={errorHandler}
          />
          <Button
            button={true}
            className={classes.button}
            onClick={(e) => {
              if (!isNameValid || !isEmailValid || !isMessageValid) {
                e.preventDefault();
                setSubmitted(true);
              } else {
                setIsSent(true);
              }
            }}
          >
            Send
          </Button>
          <p
            className={`${classes.error}  ${
              (!isNameValid || !isEmailValid || !isMessageValid) &
                isSubmitted && classes.showError
            }`}
          >
            {errorMessage}
          </p>
          <div className={`${classes.heart} ${isSent && classes.showHeart}`}>
            <img src={heart} alt="" />
            <p>
              Thanks for reaching out to me, I will reply to you as soon as
              possible.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
