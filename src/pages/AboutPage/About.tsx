import './About.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/FooterComponent";
import BioImage from "../../components/BioImage/BioImage";
import BioDescription from '../../components/BioDescription/BioDescriptionComponent';
import Credentials from '../../components/Credentials/CredentialsComponent';
import SocialComponent from '../../components/SocialComponent/SocialComponent';
import ContactComponent from '../../components/Contact/ContactComponent';
import SimpleContainer from '../../components/SimpleContainer/SimpleContainer';
import projectsImage from '../../assets/projects.jpg';




function About() {
    let educationItems = [

        {"year":"2023 - 2024",
            "job":"Fullstack Development",
            "place":"EDIT, Porto"
        },
        {"year":"2021 - 2022",
            "job":"UX/UI Design",
            "place":"FLAG, Porto"
        },
        {"year":"2014 - 2016",
            "job":"Master Degree in Communication Strategy and Publicity",
            "place":"Universidade da Beira Interior",
        },
        {"year":"2011 - 2014",
            "job":"Degree in Design Multimedia",
            "place":"Universidade da Beira Interior",
        }
        
    ]

    let experienceItems = [
        {"year":"2022 - 2023",
            "job":"Graphic | UX/UI Designer Junior",
            "place":"Wace Studio",
        },
        {"year":"2020 - 2022",
            "job":"Photographer & Videographer",
            "place":"Lignum Vulpes",
        },
        {"year":"2018 - 2020",
            "job":"Photographer & Videographer",
            "place":"Freelancer",
        },
        {"year":"2017 - 2019",
            "job":"Photographer Assistant",
            "place":"Pedro Castro Fotografo"
        }
    ]
    return(
        <>
        <NavBar />
        <div>
        <div className="row1about">
            <div className="row1col1about"> 
            <BioImage />
            </div>
            <div className="col2about">
            <div className="sub-row1about">
            <BioDescription />
            </div>
            </div>
            </div>
        <div className='row2about'>
            <div className='row2col1about'>
            <Credentials
            title="EDUCATION"
            items={educationItems}
            />        
            </div>
            <div className='row2col2about'>
            <Credentials 
            title="EXPERIENCE"
            items={experienceItems}/>
            </div>
        
        </div>
        <div className='row3about'>
        <div className="row3col1about">
            <SocialComponent 
            title= "Stay with me"
            subtitle="Profiles"/>
          </div>
          <div className="row3col2about">
            <ContactComponent />
          </div>
          <div className='row3col3about'>
          <SimpleContainer 
            img={projectsImage}
            subtitle="Projects" 
            title="Fullstack Web Developtment"
            href="projects" />
          {/* <SimpleContainer 
            img={aboutMeImage}
            subtitle="More about me" 
            title="Credentials" /> */}
          </div>

        </div>
        </div>
        


        <Footer />
        </>
    )
}

export default About