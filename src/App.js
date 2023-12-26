import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import ContactUs from "./component/Contact";
import ProjectDetails from "./component/ProjectDetails";
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
