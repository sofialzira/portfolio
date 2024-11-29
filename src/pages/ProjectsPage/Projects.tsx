import "./Projects.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/FooterComponent";
import BioTitle from "../../components/BioTitle/BioTitleComponent";
import Repo from "../../components/RepoComponent/RepoComponent";
import reactImage from '../../assets/react.jpg';
import reactProjectImage from '../../assets/reactproject.jpg';
import backendImage from '../../assets/backend.jpg';
import htmlImage from '../../assets/html.jpg';
import htmlcssImge from '../../assets/htmlcss.jpg';
import javascriptImage from '../../assets/javascript.jpg';
import typescriptImage from '../../assets/typescript.webp';
import { useEffect, useState } from "react";

function Projects() {
  let counter: number = 1;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [repoData, setRepoData] = useState<any>(null);

  const API_URL = "https://api.github.com/users/sofialzira/repos";

  async function loadData() {
    console.log(counter++)
    try {
      const response = await fetch(API_URL);
      await response.json().then((results) => {
        console.log(results);
        setRepoData(results);
        setHasLoaded(true);
      });
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  }

  function getRepos() {
    if (repoData != null) {
      return (
        <>
          <div className="row1projects">

          <div className="row1col2projects">
              <BioTitle 
              titleText="FULL STACK PROJECTS" 
              subtitleText="projects developed within the scope of an intensive fullstack training course"
              />
            </div>
            
            <div className="row1col1projects">
            <Repo
                 repoImg={backendImage}
              repoName={repoData[0].name}
              repoLanguage={repoData[0].language}
              repoUpdatedAt={repoData[0].updated_at}
              repoCreatedAt={repoData[0].created_at}
              linkToProject="https://github.com/sofialzira/BACKEND"
            />
            </div>
            
           
          </div>
          <div className="row2projects">
            <Repo
                repoImg={reactImage}
              repoName={repoData[1].name}
              repoLanguage={repoData[1].language}
              repoUpdatedAt={repoData[1].updated_at}
              repoCreatedAt={repoData[1].created_at}
               linkToProject="https://github.com/sofialzira/ecommerce-exercice-fsr"
            />
            <Repo
                repoImg={htmlImage}
              repoName={repoData[5].name}
              repoLanguage={repoData[5].language}
              repoUpdatedAt={repoData[5].updated_at}
              repoCreatedAt={repoData[5].created_at}
              linkToProject="https://github.com/sofialzira/git-final-2023-02"
            />
            <Repo
            repoImg={htmlcssImge}
              repoName={repoData[3].name}
              repoLanguage={repoData[3].language}
              repoUpdatedAt={repoData[3].updated_at}
              repoCreatedAt={repoData[3].created_at}
               linkToProject="https://github.com/sofialzira/ex-hello-world"
            />
          </div>
          <div className="row3projects">
            <Repo
                repoImg={javascriptImage}
              repoName={repoData[7].name}
              repoLanguage={repoData[7].language}
              repoUpdatedAt={repoData[7].updated_at}
              repoCreatedAt={repoData[7].created_at}
              linkToProject="https://github.com/sofialzira/JAVASCRIPT"
            />
            <Repo
            repoImg={reactProjectImage}
              repoName={repoData[8].name}
              repoLanguage={repoData[8].language}
              repoUpdatedAt={repoData[8].updated_at}
              repoCreatedAt={repoData[8].created_at}
              linkToProject="https://github.com/sofialzira/REACT-"
            />
            <Repo
            repoImg={typescriptImage}
              repoName={repoData[9].name}
              repoLanguage={repoData[9].language}
              repoUpdatedAt={repoData[9].updated_at}
              repoCreatedAt={repoData[9].created_at}
               linkToProject="https://github.com/sofialzira/TYPESCRIPT"
            />
          </div>
        </>
      );
    }
  }

  useEffect(() => {}, [hasLoaded]);

  if (!hasLoaded) loadData();

  return (
    <>
      <NavBar />
        {getRepos()}
      <Footer />
    </>
  );
}

export default Projects;
