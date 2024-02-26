import "../css/Home.css";
import "../css/Home_ar.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  // home section DOM
  return (
    <div className="home">
      <div className="home-bg"></div>
      <div className="container">
        <h1>{t("homeTitle")}</h1>
        <h2>{t("myName")}</h2>
        <p>{t("homeP")}</p>
        <Link className="toAbout" to={"../about"}>
          <button className="more_about">
            {t("More about me")}
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
