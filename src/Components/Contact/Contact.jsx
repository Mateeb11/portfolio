import { useRef } from "react";

import emailjs from "@emailjs/browser";

import classes from "./Contact.module.scss";

import SectionTitle from "../../UI/SectionTitle";
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
      <SectionTitle title="CONTACT" />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
