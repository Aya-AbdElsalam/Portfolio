import "../css/ProjectDetials.css";
//style sheet for arabic language
import "../css/projectDetails_ar.css";
import { Link, useParams } from "react-router-dom";
import ProjectList from "../../data/projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCode,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
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
        imgIcon: p.imgIcon,
        images: p.images,
        tools: p.tools,
        aboutTheSite: p.aboutTheSite_ar,
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
        imgIcon: p.imgIcon,
        images: p.images,
        tools: p.tools,
        aboutTheSite: p.aboutTheSite,
      };
    }
  });

  let choosenProject = ProjectListMap.find((e) => {
    return e.id == projectId.projectId;
  });
  const imgArr = choosenProject.images;
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(imgArr[index]);
  const about = useRef();
  useEffect(() => {
    index >= imgArr.length && setIndex(0);
    index < 0 && setIndex(imgArr.length - 1);
    setImg(imgArr[index]);
    about.current.innerHTML = choosenProject.aboutTheSite;
  }, [choosenProject.aboutTheSite, imgArr, index]);
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
          {choosenProject.lang.map((e, index) => {
            return (
              <li key={index}>
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
          <h1>{t("Aboutthesite")}</h1>
          <p ref={about}></p>
          <h1>{t("Tools")}</h1>
          <ul>
            {choosenProject.tools.map((t) => {
              return <li key={t}>{t}</li>;
            })}
          </ul>
          <h1>{t("Thesite")}</h1>
          <div className="slider">
            <img
              src={img}
              width={"100%"}
              height={"100%"}
              alt={choosenProject.title}
            ></img>
          </div>
          <div className="control">
            <span
              onClick={() => {
                setIndex(index - 1);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
            </span>
            <span
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </span>
          </div>
        </div>
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
