import style from './BioImage.module.css';
import bioImage from '../../assets/bio-image-2.png';


function BioImage() {
    

    return (
        <div className={style.bioImageGeneral}>
            <div className={style.bioImageContainer}>
                <img src={bioImage} className={style.bioImage}></img> 
            </div>
        </div>
    )
}


export default BioImage