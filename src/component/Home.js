import "../component/Home.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import developer from "../photo/developer.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
//style sheet for arabic language
import "../component/Home_ar.css";
function Home() {
  function toAbout() {
    document.querySelector(".toAbout").addEventListener("click", () => {
      document.querySelectorAll("ul li")[0].classList.remove("active");
      document.querySelectorAll("ul li")[1].classList.add("active");
    });
  }
  useEffect(() => {
    toAbout();
  }, []);
  const { t } = useTranslation();
  // home section DOM
  return (
    <div className="home">
      <div className="info container">
        <h1>{t("homeTitle")}</h1>
        <ul>
          <li>{t("CREATIVE CODER")}</li>
          <li>{t("FRONTEND DEVELOPER")}</li>
        </ul>
        <p>{t("homeP")}</p>
        <Link className="toAbout" to={"about"}>
          <button
            className="more_about"
            onMouseOver={(e) => {
              document.querySelector(".cursor").classList.add("active");
            }}
            onMouseOut={() => {
              document.querySelector(".cursor").classList.remove("active");
            }}
          >
            {t("More about me")}
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </button>
        </Link>
      </div>
      <div className="img">
        <div
          className="background"
          style={{ height: "100%", width: "100%" }}
        ></div>
        <div className="image">
          <img alt="" src={developer} height={"100%"} width={"100%"} />
        </div>
      </div>
    </div>
  );
}
export default Home;
