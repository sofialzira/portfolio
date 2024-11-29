import style from './BioContainer.module.css';
import { CiCircleChevRight } from "react-icons/ci";
import bioImage from '../../assets/bio-image.png';



function BioContainer(props:any) {
    const { bioJob, bioName, bioDescription } = props;


    return (
        <div className={style.bioContainerGeneral}>
            <div className={style.imageContainer}>
                <img src={bioImage} className={style.bioImage}></img> 
            </div>
            <div className={style.infoContainer}>
                <div className={style.infoTextContainer}>
                    <span className={style.bioJob}>{bioJob}</span>
                    <span className={style.bioName}>{bioName}</span>
                    <span className={style.bioDescription}>{bioDescription}</span>
                </div>
                <div className={style.infoButtonContainer}>
    
                <a className={style.infoButton} href="about">
                <CiCircleChevRight /></a>
                </div>
            </div>
        </div>
    )
}


export default BioContainer