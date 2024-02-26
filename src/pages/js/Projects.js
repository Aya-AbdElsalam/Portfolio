import ProjectList from "../../data/projectsList";
import { useEffect, useRef, useState } from "react";
import "../css/projects.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Projects(props) {
  const { t, i18n } = useTranslation();
  const scrollImg = useRef([]);
  const [scrollState, setScrollState] = useState();
  useEffect(() => {
    let backgroundPositionY = 0;
    scrollImg.current.forEach((img) => {
      setScrollState(
        setInterval(() => {
          backgroundPositionY--;
          img.style.backgroundPositionY = `${backgroundPositionY - 1}px`;
        }, 100)
      );
    });

    return () => {
      clearInterval(scrollState);
    };
  }, []);
  //projects DOM
  return (
    <div className="projects_section">
      <div className="container">
        <h1>{t("projects_page_title")}</h1>
        <div className="projects">
          {ProjectList.map((e, i) => {
            return (
              <Link to={`/projects/${e.id}`} key={e.id}>
                <div
                  key={e.id}
                  className="project"
                  id={`p${e.id}`}
                  ref={(el) => (scrollImg.current[i] = el)}
                  style={{ backgroundImage: `url(${e.img})` }}
                  onMouseOver={() =>
                    i18n.language === "en"
                      ? props.setMoreInfo("en")
                      : props.setMoreInfo("ar")
                  }
                  onMouseOut={() => {
                    props.setMoreInfo(false);
                  }}
                  onClick={() => {
                    props.setMoreInfo(false);
                  }}
                ></div>
                <p>{e.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Projects;
