import style from "./SimpleContainer.module.css";
import { CiCircleChevRight } from "react-icons/ci";

function SimpleContainer(props: any) {
  const { img, subtitle, title, href, setSelectedComponent } = props;

  function conditionalNavigation() {
    if (setSelectedComponent) {
      return (
        <a
          className={style.infoButton}
          href={undefined}
          onClick={() => {
            setSelectedComponent("projects");
          }}
        >
          <CiCircleChevRight />
        </a>
      );
    } else {
      return (
        <a className={style.infoButton} href={href} target="_blank">
          <CiCircleChevRight />
          
        </a>
      );
    }
  }

  return (
    <div className={style.aboutSimpleContainerGeneral}>
      <div className={style.aboutImageContainer}>
        <img src={img} className={style.aboutMeImage}></img>
      </div>
      <div className={style.infoContainer}>
        <div className={style.infoTextContainer}>
          <span className={style.subtitle}>{subtitle}</span>
          <span className={style.title}>{title}</span>
        </div>
        <div className={style.infoButtonContainer}>
          {conditionalNavigation()}
        </div>
      </div>
    </div>
  );
}

export default SimpleContainer;
