import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import About from "./pages/AboutPage/About";
import Projects from "./pages/ProjectsPage/Projects";

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>

    <Route index element={<Homepage/>} />
    <Route path="/home" element={<Homepage/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/projects" element={<Projects/>} />


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
