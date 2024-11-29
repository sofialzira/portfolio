import style from './LinksComponent.module.css';



function Links() {

    return (
        <div className={style.linksGeneralContainer}>
             <div className={style.linksWrapper}>
                    <ul className={style.vaiCaralho}>
                        <li className={style.linksline}><span className={style.linkText}>React</span></li>  
                        <li className={style.linksline}> <span className={style.linkText}>Javascript</span></li>                    
                        <li className={style.linksline}><span className={style.linkText}>Backend</span></li>                       
                        <li className={style.linksline}><span className={style.linkText}>NodeJS</span></li>
                    </ul>
                    <ul className={style.vaiCaralho}>
                    <li className={style.linksline}> <span className={style.linkText}>HTML/CSS</span></li>                       
                        <li className={style.linksline}> <span className={style.linkText}>Git</span></li>                       
                        <li className={style.linksline}><span className={style.linkText}>Figma</span></li>                       
                        <li className={style.linksline}><span className={style.linkText}>Adobe Suite</span></li>
                    </ul>
                </div>
        </div>
    )
}

export default Links