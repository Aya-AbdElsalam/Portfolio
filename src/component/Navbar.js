import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Cursor from "./Cursor";
import { useTranslation } from "react-i18next";
import "../component/Navbar.css";
//style sheet for arabic language
import "../component/Navbar_ar.css";
// open navbar in small device
function openNavbar() {
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector("ul").classList.toggle("open");
}
//active page when reload the website
function pageActive() {
  document.querySelectorAll("a").forEach((e, index) => {
    if (window.location.href === `${e.href}`) {
      document.querySelectorAll("ul li")[index].classList.add("active");
    }
  });
}
//active page when click on it
function pageActiveOnClick() {
  document
    .querySelectorAll(".navbar ul.links>li:not(li:last-of-type)  ")
    .forEach((e) => {
      e.addEventListener("click", () => {
        document
          .querySelectorAll(".navbar ul.links>li:not(li:last-of-type) ")
          .forEach((e) => {
            e.classList.remove("active");
          });
        e.classList.add("active");
      });
    });
}
//open setting tab when click on it
function setting() {
  document
    .querySelector(".navbar ul.links > li:last-of-type span")
    .addEventListener("click", (e) => {
      e.target.parentNode.parentNode.classList.toggle("open");
    });
}
function closeNavbar() {
  document.querySelector(".links").classList.remove("open");
  document.querySelector(".menu").classList.remove("open");
}
//color mode
function mode() {
  if (localStorage.getItem("color-option")) {
    document.documentElement.style.setProperty(
      "--main--color",
      localStorage.getItem("color-option")
    );
    document.querySelectorAll(".setting-box .color-list li").forEach((c) => {
      if (c.dataset.color === localStorage.getItem("color-option")) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
  }
  document.querySelectorAll(".setting-box .color-list li").forEach((c) => {
    c.addEventListener("click", (e) => {
      document.documentElement.style.setProperty(
        "--main--color",
        e.target.dataset.color
      );
      localStorage.setItem("color-option", e.target.dataset.color);
      document.querySelectorAll(".setting-box .color-list li").forEach((c) => {
        c.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
}
//change language
function returnLan(h) {
  if (localStorage.getItem("lan")) {
    h.changeLanguage(localStorage.getItem("lan"));
    if (localStorage.getItem("lan") === "ar") {
      document.body.dir = "rtl";
    }
  }
}

function Navbar() {
  const { t, i18n } = useTranslation();
  function changeEN() {
    i18n.changeLanguage("en");
    localStorage.setItem("lan", "en");
    document.body.dir = "ltr";
  }
  function changeAR() {
    i18n.changeLanguage("ar");
    localStorage.setItem("lan", "ar");
    document.body.dir = "rtl";
  }

  useEffect(() => {
    pageActive();
    pageActiveOnClick();
    setting();
    mode();
    returnLan(i18n);
  }, [i18n]);
  // navbar DOM
  return (
    <div className="navbar">
      <div
        className="menu"
        onClick={() => {
          openNavbar();
        }}
      >
        <span>__</span>
        <span>__</span>
        <span>__</span>
      </div>
      <ul className="links">
        <li>
          <Link
            to={"/"}
            onClick={() => {
              closeNavbar();
            }}
          >
            <i>
              <FontAwesomeIcon icon={faHouse} />
            </i>
            <span>{t("Home")}</span>
          </Link>
        </li>
        <li>
          <Link
            to={"about"}
            onClick={() => {
              closeNavbar();
            }}
          >
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>
            <span>{t("About")}</span>
          </Link>
        </li>
        <li>
          <Link
            to={"projects"}
            onClick={() => {
              closeNavbar();
            }}
          >
            <i>
              <FontAwesomeIcon icon={faBriefcase} />
            </i>
            <span>{t("Projects")}</span>
          </Link>
        </li>
        <li>
          <Link
            to={"contact"}
            onClick={() => {
              closeNavbar();
            }}
          >
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <span>{t("Contact")}</span>
          </Link>
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faGear} />
          </i>
          <div className="setting-box">
            <span>{t("Setting")}</span>
            <div className="option-box">
              <h4>{t("Colors")}</h4>
              <ul className="color-list">
                <li data-color="rgb(0, 196, 204)" className="active"></li>
                <li data-color="#2eef2b"></li>
                <li data-color="#56b1ff"></li>
                <li data-color="#ff0c0c"></li>
                <li data-color="#65c5c0"></li>
                <li data-color="#ab602f"></li>
                <li data-color="#2fab9b"></li>
                <li data-color="#781d7e"></li>
                <li data-color="#d81b60"></li>
                <li data-color="#145287"></li>
              </ul>
            </div>
            <div className="lan">
              <h4>{t("lan")}</h4>
              <ul>
                <li
                  onClick={() => {
                    changeEN();
                    closeNavbar();
                  }}
                >
                  {t("EN")}
                </li>
                <li
                  onClick={() => {
                    changeAR();
                    closeNavbar();
                  }}
                >
                  {t("AR")}
                </li>
              </ul>
            </div>
          </div>
        </li>
        <Cursor />
      </ul>
    </div>
  );
}
export default Navbar;
