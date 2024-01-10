import { Link, useParams } from "react-router-dom";
import ProjectList from "./projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCode,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../component/ProjectDetials.css";
//style sheet for arabic language
import "../component/projectDetails_ar.css";
import { useTranslation } from "react-i18next";
function ProjectDetails() {
  const projectId = useParams();
  //pick choosen project from all projects
  const { t, i18n } = useTranslation();
  const ProjectListMap = ProjectList.map((p) => {
    if (i18n.language === "ar") {
      return {
        id: p.id,
        img: p.img,
        imgAllPages: p.imgAllPages,
        title: p.title,
        liveMode: p.liveMode,
        code: p.code,
        lang: p.lang,
        pages: p.pages_ar,
        features: p.features_ar,
        dataStorage: p.dataStorage_ar,
        imgIcon: p.imgIcon,
      };
    } else {
      return {
        id: p.id,
        img: p.img,
        imgAllPages: p.imgAllPages,
        title: p.title,
        liveMode: p.liveMode,
        code: p.code,
        lang: p.lang,
        pages: p.pages,
        features: p.features,
        dataStorage: p.dataStorage,
        imgIcon: p.imgIcon,
      };
    }
  });

  let choosenProject = ProjectListMap.find((e) => {
    return e.id == projectId.projectId;
  });

  //project details DOM
  return (
    <div className="projectDetails">
      <h1>
        {t("projectDetailsTitle")} {choosenProject.title}
      </h1>
      <div
        className="imgWebsite"
        style={{ backgroundImage: `url(${choosenProject.imgAllPages})` }}
      >
        <div className="buttons">
          <a
            target="_blank"
            href={`${choosenProject.liveMode}`}
            rel="noreferrer"
          >
            <button>
              {t("livepreview")}

              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
            </button>
          </a>
          <a target="_blank" href={`${choosenProject.code}`} rel="noreferrer">
            <button>
              {t("code")}

              <i>
                <FontAwesomeIcon icon={faCode} />
              </i>
            </button>
          </a>
        </div>
        <ul>
          {choosenProject.lang.map((e) => {
            return (
              <li>
                <i>
                  <FontAwesomeIcon icon={e} />
                </i>
              </li>
            );
          })}
          {choosenProject.imgIcon && (
            <li>
              <i>
                <img
                  src={choosenProject.imgIcon}
                  width={"100%"}
                  height={"100%"}
                  alt=""
                />
              </i>
            </li>
          )}
        </ul>
      </div>
      <div className="container">
        <div className="info">
          <ul>
            <h2>{t("PAGES")}</h2>

            {choosenProject.pages.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>
          <ul>
            <h2>{t("FEATURES")}</h2>
            {choosenProject.features.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>
        </div>
        <h3>
          {t("Using")}
          {choosenProject.dataStorage} {t("toStoreData")}
        </h3>
        <Link to={"../projects"}>
          <button className="more_project">
            <i>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
            {t("backToProjects")}
          </button>
        </Link>
      </div>
    </div>
  );
}
export default ProjectDetails;
