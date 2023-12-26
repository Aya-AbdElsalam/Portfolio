import { useEffect } from "react";
import ProjectList from "./projectsList";
import "../component/projects.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//show "more info" when hover on projects
function MoreInfo(element, lan) {
  element.forEach((e) => {
    e.addEventListener("mouseover", () => {
      if (lan === "ar") {
        document.querySelector(".cursor").classList.add("more_ar");
      } else {
        document.querySelector(".cursor").classList.add("more");
      }
    });
    function removeClass() {
      if (lan === "ar") {
        document.querySelector(".cursor").classList.remove("more_ar");
      } else {
        document.querySelector(".cursor").classList.remove("more");
      }
    }
    e.addEventListener("mouseout", () => {
      removeClass();
    });
    e.addEventListener("click", () => {
      removeClass();
    });
  });
}
function onHover() {
  //scrolling image when hover on it
  document.querySelectorAll(".project").forEach((project) => {
    let scroll;
    let backgroundPositionY = 0;
    project.addEventListener("mouseover", () => {
      scroll = setInterval(() => {
        backgroundPositionY--;
        project.style.backgroundPositionY = `${backgroundPositionY - 1}px`;
      }, 20);
    });
    project.addEventListener("mouseout", () => {
      clearInterval(scroll);
    });
  });
}
function Projects() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    MoreInfo(document.querySelectorAll(".projects_section a"), i18n.language);
    onHover();
  }, [i18n]);

  //projects DOM
  return (
    <div className="projects_section">
      <div className="container">
        <h1>{t("projects_page_title")}</h1>
        <div className="projects">
          {ProjectList.map((e) => {
            return (
              <Link to={`/projects/${e.id}`} key={e.id}>
                <div
                  key={e.id}
                  className="project"
                  id={`p${e.id}`}
                  style={{ backgroundImage: `url(${e.img})` }}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Projects;
