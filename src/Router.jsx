import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import About from "./pages/about";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contactme" element={ <Contact /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}