import BioContainer from "../components/BioContainerComponent/BioContainer";
import NavBar from "../components/NavBar/NavBar";
import SimpleContainer from "../components/SimpleContainer/SimpleContainer";
// import aboutMeImage from '../assets/about-me.jpg';
import projectsImage from '../assets/projects.jpg';
import Links from "../components/LinksComponent/LinksComponent";
import blogImage from '../assets/blog-image.jpg';
import Footer from "../components/Footer/FooterComponent";
import ServicesComponent from "../components/ServicesComponent/ServicesComponent";
import SocialContainer from "../components/SocialComponent/SocialComponent";
// import DataComponent from "../components/DataComponent/DataComponent";
import ContactComponent from "../components/Contact/ContactComponent";

function Homepage() {
    return (
      <>
        <NavBar />
        <div>
          <div className="row1">
            <div className="row1col1"> 
            <BioContainer
              bioJob="Fullstack Developer"
              bioName="Sofia Wood."
              bioDescription="Driven by creativity, curiosity and focused on fulfilling objectives, I am ready to bring a versatile approach to every project."
            />
            </div>
            <div className="col2">
            <Links />
            <div className="sub-row1">
            <div className="row1col2"> 
            <SimpleContainer 
            img={blogImage}
            subtitle="Portfolio" 
            title="Design"
            href="https://www.behance.net/sofiaoliveira-" target="_blank" rel="" />
            </div>
            <div className="row1col3"> 
            <SimpleContainer 
            img={projectsImage}
            subtitle="Projects" 
            title="FS Web Developtment"
            href="projects" />
            </div>
          </div>
          </div>
          </div>
        <div className="row2">
          <div className="row2col1">
          
             <SocialContainer 
            title= "Stay with me"
            subtitle="Profiles"/>
          </div>
          <div className="row2col2">
            <ServicesComponent 
            subtitle="Interests"
            title="Skills & Hobbies"/>
          </div>
        </div>
        <div className="row3">
          {/* <div className="row3col1">
            <DataComponent />
          </div> */}
          <div className="row3col2">
            <ContactComponent />
          </div>
        </div>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Homepage;
  