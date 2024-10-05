import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/Skills";
import Projects from "../pages/Projects";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";
import WorkExperience from "../pages/WorkExperience";
import Articles from "../pages/Articles";
import Skills from "../pages/Skills";
import Youtube from "../pages/Youtube";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<WorkExperience />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
