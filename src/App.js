import "./App.css";
import Navbar from "./component/js/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/js/Home";
import About from "./pages/js/About";
import Projects from "./pages/js/Projects";
import ContactUs from "./pages/js/Contact";
import ProjectDetails from "./pages/js/ProjectDetails";
import Particles from "react-tsparticles";
import { useCallback, useEffect } from "react";
import { loadSlim } from "tsparticles-slim";
import Cursor from "./component/js/Cursor";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [activeCursor, setActiveCursor] = useState(false);
  const [activeInputCursor, setActiveInputCursor] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);
  const { i18n } = useTranslation();
  //color mode
  function mode() {
    if (localStorage.getItem("color-option")) {
      document.documentElement.style.setProperty(
        "--main--color",
        localStorage.getItem("color-option")
      );
    }
  }
  //change language
  function returnLan(h) {
    if (localStorage.getItem("i18nextLng")) {
      h.changeLanguage(localStorage.getItem("i18nextLng"));
      if (localStorage.getItem("i18nextLng") === "ar") {
        document.body.dir = "rtl";
      }
    }
  }
  useEffect(() => {
    mode();
    returnLan(i18n);
  }, [i18n]);
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "black",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Cursor
        activeCursor={activeCursor}
        activeInputCursor={activeInputCursor}
        moreInfo={moreInfo}
      />

      <div
        className="language"
        style={{
          left: localStorage.getItem("i18nextLng") === "ar" && "10px",
          right: localStorage.getItem("i18nextLng") === "en" && "10px",
        }}
        onClick={() => {
          if (document.body.dir === "rtl") {
            i18n.changeLanguage("en");
            document.body.dir = "ltr";
          } else {
            i18n.changeLanguage("ar");
            document.body.dir = "rtl";
          }
        }}
      >
        {localStorage.getItem("i18nextLng") === "ar" ? "EN" : "AR"}
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home setActiveCursor={setActiveCursor} />}
        ></Route>
        <Route
          path="Home"
          element={<Home setActiveCursor={setActiveCursor} />}
        ></Route>
        <Route
          path="about"
          element={
            <>
              <Navbar setActiveCursor={setActiveCursor} />
              <About />
            </>
          }
        ></Route>
        <Route
          path="projects"
          element={
            <>
              <Navbar setActiveCursor={setActiveCursor} />
              <Projects setMoreInfo={setMoreInfo} />
            </>
          }
        ></Route>
        <Route
          path="projects/:projectId"
          element={
            <>
              <Navbar setActiveCursor={setActiveCursor} />
              <ProjectDetails></ProjectDetails>
            </>
          }
        ></Route>
        <Route
          path="contact"
          element={
            <>
              <Navbar setActiveCursor={setActiveCursor} />
              <ContactUs
                setActiveCursor={setActiveCursor}
                setActiveInputCursor={setActiveInputCursor}
              />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
