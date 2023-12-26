import "../component/Home.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import developer from "../photo/developer.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { cursor } from "../App";
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
    cursor(document.querySelectorAll(".more_about"));
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
          <button className="more_about">
            {t("More about me")}
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </button>
        </Link>
      </div>
      <div className="img">
        <div className="background"></div>
        <div className="image">
          <img alt="" src={developer} />
        </div>
      </div>
    </div>
  );
}
export default Home;
