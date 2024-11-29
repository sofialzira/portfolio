import style from "./RepoComponent.module.css";
import { CiCircleChevRight } from "react-icons/ci";

function Repo(props: any) {

    const { repoImg, repoName, repoLanguage, repoUpdatedAt, repoCreatedAt, linkToProject } = props;
  
  return (
    <div className={style.repoContainerGeneral}>
      <div className={style.repoImageContainer}>
        <img src={repoImg} className={style.repoImage}></img>
      </div>
      <div className={style.repoInfoContainer}>
        <div className={style.repoInfoTextContainer}>
          <span className={style.repoName}>{repoName}</span>
          <span className={style.repoLanguage}>{repoLanguage}</span>
          <span className={style.lastUpdate}>
            Last Update: {repoUpdatedAt}
          </span>
          <span className={style.repoAge}> Age: {repoCreatedAt}</span> 
        </div>
        <div className={style.infoButtonContainer}>
                <a className={style.infoButton} href={linkToProject}>
                <CiCircleChevRight /></a>
                </div>
      </div>
    </div>
  );
}

export default Repo;
