import "../component/about.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { cursor } from "../App";
import { useTranslation } from "react-i18next";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Blaka&family=Lalezar&family=Readex+Pro:wght@600;700&family=Reem+Kufi:wght@400;500;600&display=swap');
</style>;
function About() {
  const { t, i18n } = useTranslation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function scroll() {
    let skills = document.querySelector(".my_skills");
    document.querySelectorAll(".progress").forEach((skill, index) => {
      skill.style.background = `conic-gradient(rgb(115 115 255) ${
        3.6 * skill.dataset.progress
      }deg , #1a1a1a 0deg)`;
      skill.style.filter = `hue-rotate(${3.6 * skill.dataset.progress}deg)`;
    });
    //show value of each skill when reach to skills_section
    window.onscroll = function () {
      let skillOffsetTop = skills.offsetTop;
      let skillOuterHeight = skills.offsetHeight;
      let windowHeight = this.innerHeight;
      let windowScroll = this.pageYOffset;
      if (
        (windowScroll >=
          skillOffsetTop + skillOuterHeight - windowHeight - 35 &&
          windowScroll <=
            skillOffsetTop + skillOuterHeight - windowHeight - 25) ||
        windowScroll === skillOffsetTop + skillOuterHeight - windowHeight + 100
      ) {
        document.querySelectorAll(".progress").forEach((skill, index) => {
          let progressStart = 0;
          let array = [
            "١",
            "٢",
            "٣",
            "٤",
            "٥",
            "٦",
            "٧",
            "٨",
            "٩",
            "١٠",
            "١١",
            "١٢",
            "١٣",
            "١٤",
            "١٥",
            "١٦",
            "١٧",
            "١٨",
            "١٩",
            "٢٠",
            "٢١",
            "٢٢",
            "٢٣",
            "٢٤",
            "٢٥",
            "٢٦",
            "٢٧",
            "٢٨",
            "٢٩",
            "٣٠",
            "٣١",
            "٣٢",
            "٣٣",
            "٣٤",
            "٣٥",
            "٣٦",
            "٣٧",
            "٣٨",
            "٣٩",
            "٤٠",
            "٤١",
            "٤٢",
            "٤٣",
            "٤٤",
            "٤٥",
            "٤٦",
            "٤٧",
            "٤٨",
            "٤٩",
            "٥٠",
            "٥١",
            "٥٢",
            "٥٣",
            "٥٤",
            "٥٥",
            "٥٦",
            "٥٧",
            "٥٨",
            "٥٩",
            "٦٠",
            "٦١",
            "٦٢",
            "٦٣",
            "٦٤",
            "٦٥",
            "٦٦",
            "٦٧",
            "٦٨",
            "٦٩",
            "٧٠",
            "٧١",
            "٧٢",
            "٧٣",
            "٧٤",
            "٧٥",
            "٧٦",
            "٧٧",
            "٧٨",
            "٧٩",
            "٨٠",
            "٨١",
            "٨٢",
            "٨٣",
            "٨٤",
            "٨٥",
            "٨٦",
            "٨٧",
            "٨٨",
            "٨٩",
            "٩٠",
            "٩١",
            "٩٢",
            "٩٣",
            "٩٤",
            "٩٥",
            "٩٦",
            "٩٧",
            "٩٨",
            "٩٩",
            "١٠٠",
          ];
          var progressInterval = setInterval(() => {
            progressStart += 1;
            skill.style.filter = `hue-rotate(${3.6 * progressStart}deg)`;
            if (document.querySelectorAll(".value").length !== 0) {
              if (i18n.language === "ar") {
                document.querySelectorAll(".value")[index].textContent =
                  array[progressStart - 1] + "٪";
              } else {
                document.querySelectorAll(".value")[index].textContent =
                  progressStart + "%";
              }
              skill.style.background = `conic-gradient(rgb(115 115 255) ${
                3.6 * progressStart
              }deg , #1a1a1a 0deg)`;
            }
            if (progressStart === parseInt(skill.dataset.progress)) {
              clearInterval(progressInterval);
            }
          }, 10);
        });
      }
    };
  }
  //start function of skill progress
  useEffect(() => {
    cursor(document.querySelectorAll(".about td.button"));
    scroll();
  }, [scroll]);
  //end function of skill progress

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
            <div className="skill">
              <div className="progress" data-progress="90">
                <span className="value">{t("90%")}</span>
              </div>
              <span className="skill_name">HTML</span>
            </div>
            <div className="skill">
              <div className="progress" data-progress="85">
                <span className="value">{t("85%")}</span>
              </div>
              <span className="skill_name">CSS</span>
            </div>
            <div className="skill">
              <div className="progress" data-progress="80">
                <span className="value">{t("80%")}</span>
              </div>
              <span className="skill_name">JavaScript</span>
            </div>
            <div className="skill">
              <div className="progress" data-progress="90">
                <span className="value">{t("90%")}</span>
              </div>
              <span className="skill_name">Bootstrap</span>
            </div>
            <div className="skill">
              <div className="progress" data-progress="90">
                <span className="value">{t("90%")}</span>
              </div>
              <span className="skill_name">MUI</span>
            </div>
            <div className="skill">
              <div className="progress" data-progress="70">
                <span className="value">{t("70%")}</span>
              </div>
              <span className="skill_name">React</span>
            </div>
            <div className="skill">
              <div className="progress" data-progress="60">
                <span className="value">{t("60%")}</span>
              </div>
              <span className="skill_name">Git/GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
