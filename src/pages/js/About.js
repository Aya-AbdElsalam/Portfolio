import "../css/about.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import html from "../../images/html.webp";
import css from "../../images/css.webp";
import js from "../../images/js.webp";
import ts from "../../images/ts.webp";
import mui from "../../images/materialUi.webp";
import github from "../../images/github.webp";
import bootstrap from "../../images/bootstrap.webp";
import sass from "../../images/sass.webp";
import react from "../../images/react.webp";
function About() {
  const { t } = useTranslation();
  //start about section Dom
  return (
    <div className="about">
      <div className="container">
        {/* personal information section  */}
        <div className="personal_info">
          <h1>{t("personalInformationTitle")}</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>{t("FirstName")} </span>
                  <span> &nbsp;{t("FirstNameValue")}</span>
                </td>
                <td>
                  <span>{t("LastName")}</span>
                  <span> &nbsp;{t("LastNameValue")}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("Address")}</span>
                  <span> &nbsp;{t("AddressValue")} </span>
                </td>
                <td>
                  <span>{t("Langages")} </span>
                  <span>&nbsp;{t("LangagesValue")}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("Age")}</span>
                  <span> &nbsp; {t("AgeValue")}</span>
                </td>
                <td>
                  <span>{t("Freelance")}</span>
                  <span> &nbsp;{t("FreelanceValue")}</span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>{t("Nationality")}</span>
                  <span> &nbsp;{t("NationalityValue")} </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>{t("Email")}</span>
                  <span>&nbsp; ayam28040@gmail.com</span>
                </td>
              </tr>
              <tr>
                <td className="button">
                  <a
                    href="https://drive.google.com/file/d/1xZbw-03E_kMRgMXP-itv-cLsw_ZR9fEa/view?usp=sharing"
                    target="_blanck"
                  >
                    <button>
                      {t("DOWNLOADCV")}&nbsp; &nbsp;
                      <i>
                        <FontAwesomeIcon icon={faDownload} />
                      </i>
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* my skills section */}
        <div className="my_skills">
          <h1>{t("MYSKILLS")}</h1>
          <div className="skills">
            {[html, css, js, ts, sass, react, github, bootstrap, mui].map(
              (lan) => {
                return (
                  <div key={lan} className="skill">
                    <img src={lan} width={"100%"} height={"100%"} alt={lan} />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
