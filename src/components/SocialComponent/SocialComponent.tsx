import style from './SocialComponent.module.css';

import Social from './Social/social'


function SocialContainer(props:any) {
    const { title, subtitle } = props;

    return (
        <div className={style.socialContainerGeneral}>
            <Social />
            <div className={style.infoContainer}>
                <div className={style.infoTextContainer}>
                    <span className={style.subtitle}>{subtitle}</span>
                    <span className={style.title}>{title}</span>
                </div>
                </div>
        </div>

    )
}

export default SocialContainer