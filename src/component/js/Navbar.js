import "../css/Navbar.css";
//style sheet for arabic language
import "../css/Navbar_ar.css";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function Navbar(props) {
  const { t, i18n } = useTranslation();
  const [Menu, setMenue] = useState(false);
  const [activePage, setActivePage] = useState("home");
  useEffect(() => {
    setActivePage(window.location.href);
  }, [i18n]);
  // navbar DOM
  return (
    <div className="navbar">
      <div
        className={`menu ${Menu === true && "open"}`}
        onClick={(e) => {
          // open navbar in small device
          e.currentTarget.classList.toggle("open");
          e.currentTarget.classList.contains("open")
            ? setMenue(true)
            : setMenue(false);
        }}
      >
        <span>__</span>
        <span>__</span>
        <span>__</span>
      </div>
      <ul className={`links ${Menu === true && "open"}`}>
        {["Home", "About", "Projects", "contact"].map((p, index) => {
          return (
            <li
              onMouseOver={() => props.setActiveCursor(true)}
              onMouseOut={() => props.setActiveCursor(false)}
              key={p}
              className={`${
                activePage.toLowerCase().includes(p.toLowerCase()) && "active"
              }`}
              onClick={() => {
                setActivePage(window.location.href);
              }}
            >
              <Link
                to={`../${p}`}
                onClick={() => {
                  setMenue(false);
                }}
              >
                <i>
                  <FontAwesomeIcon
                    icon={[faHouse, faUser, faBriefcase, faEnvelope][index]}
                  />
                </i>
                <span>{t(p)}</span>
              </Link>
            </li>
          );
        })}
        <li
          onClick={(e) => {
            e.currentTarget.classList.toggle("open");
          }}
        >
          <i>
            <FontAwesomeIcon icon={faGear} />
          </i>
          <div className="setting-box">
            <span>{t("Setting")}</span>
            <div className="option-box">
              <h4>{t("Colors")}</h4>
              <ul className="color-list">
                {[
                  "rgb(0, 196, 204)",
                  "#2eef2b",
                  "#56b1ff",
                  "#ff0c0c",
                  "#65c5c0",
                  "#ab602f",
                  "#2fab9b",
                  "#781d7e",
                  "#d81b60",
                  "#145287",
                ].map((c) => {
                  return (
                    <li
                      key={c}
                      className={
                        c === localStorage.getItem("color-option")
                          ? "active"
                          : ""
                      }
                      onClick={() => {
                        localStorage.setItem("color-option", c);
                        document.documentElement.style.setProperty(
                          "--main--color",
                          c
                        );
                      }}
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
