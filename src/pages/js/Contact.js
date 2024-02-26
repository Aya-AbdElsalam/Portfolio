import "../css/Contact.css";
//style sheet for arabic language
import "../css/contact_ar.css";
import {
  faComment,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
function ContactUs(props) {
  //sent message
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_doe3x9g",
        "template_wxhvxyk",
        form.current,
        "0OAz84xqssxDSzV8U"
      )
      .then(
        (result) => {
          //message has been sent
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: `var(--main--color)`,
            title: `${t("msgTitle")}`,
            text: `${t("msgP")}`,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //contact form dom
  return (
    <div className="contact">
      <div className="container">
        <h1>{t("contactPageTitle")}</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">{t("YourName")}</label>
            <input
              name="from_name"
              type="text"
              placeholder={t("YourName")}
              id="name"
              required
              onMouseOver={() => props.setActiveInputCursor(true)}
              onMouseOut={() => props.setActiveInputCursor(false)}
            ></input>
          </div>
          <div>
            <label htmlFor="email">{t("YourEmail")}</label>
            <input
              type="email"
              placeholder={t("YourEmail")}
              id="email"
              name="from_email"
              required
              onMouseOver={() => props.setActiveInputCursor(true)}
              onMouseOut={() => props.setActiveInputCursor(false)}
            ></input>
          </div>
          <div>
            <label htmlFor="Subject">{t("Subject")}</label>
            <input
              type="text"
              placeholder={t("Subject")}
              id="Subject"
              name="subject"
              onMouseOver={() => props.setActiveInputCursor(true)}
              onMouseOut={() => props.setActiveInputCursor(false)}
            ></input>
          </div>
          <div>
            <label htmlFor="msg">{t("YourMessage")}</label>
            <textarea
              placeholder={t("YourMessage")}
              id="msg"
              name="message"
              required
              onMouseOver={() => props.setActiveInputCursor(true)}
              onMouseOut={() => props.setActiveInputCursor(false)}
            ></textarea>
          </div>
          <button type="submit">
            {t("SendMessage")} &nbsp; &nbsp;
            <i>
              <FontAwesomeIcon icon={faComment} />
            </i>
          </button>
        </form>
        {/* contact methods Dom*/}
        <h2> {t("contactMethodTitle")}</h2>
        <div className="get_in_touch">
          <div>
            <p>{t("contactMethodP")}</p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100037034173203&mibextid=LQQJ4d"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aya-abd-elsalam-1a1041288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Aya-AbdElsalam"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <div>
                  <p> {t("MailMe")}</p>
                  <span>ayam28040@gmail.com</span>
                </div>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                <div>
                  <p>{t("CallMe")}</p>
                  <span>{t("PhoneValue")}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
