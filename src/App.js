import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import ContactUs from "./component/Contact";
import ProjectDetails from "./component/ProjectDetails";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
function cursor(element) {
  element.forEach((e) => {
    e.addEventListener("mouseover", () => {
      document.querySelector(".cursor").classList.add("active");
    });
    e.addEventListener("mouseout", () => {
      document.querySelector(".cursor").classList.remove("active");
    });
  });
}
function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lobster&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,800&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lalezar&family=Reem+Kufi:wght@400;500;600&display=swap');
      </style>
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
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
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
              speed: 3,
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
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="about" element={<About />}>
          {" "}
        </Route>
        <Route path="projects" element={<Projects />}>
          {" "}
        </Route>
        <Route
          path="projects/:projectId"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
        <Route path="contact" element={<ContactUs />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}
export { cursor };
export default App;
