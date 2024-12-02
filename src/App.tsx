import "./App.css";
import Homepage from "./pages/Home";
import About from "./pages/AboutPage/About";
import Projects from "./pages/ProjectsPage/Projects";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/FooterComponent";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("home");

  useEffect(() => {
    renderComponent();
  }, [selectedComponent]);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "about":
        return <About/>;
      case "projects":
        return <Projects/>;
      case "home":
      default:
        return <Homepage setSelectedComponent={setSelectedComponent}/>;
    }
  };

  return (
    <>
      <NavBar setSelectedComponent={setSelectedComponent}/>
      {renderComponent()}
      <Footer setSelectedComponent={setSelectedComponent}/>
    </>
  )
}

export default App;