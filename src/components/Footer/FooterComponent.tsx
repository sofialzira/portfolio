import style from './FooterComponent.module.css';
import logo from '../../assets/sofiawoodlogo.svg'

function Footer() {

    return(
        <div className={style.footer}>
        <div className={style.logoContainer}>
            <img src={logo} alt="logo" />
        </div>

         <nav className={style.linksWrapper}>
                <div className={style.mainMenu}>
                    <ul>
                        <li><a href="home"> <span className={style.menuFooter}> Home</span></a></li>
                        <li><a href="about"><span className={style.menuFooter}> About</span></a></li>
                        <li><a href="projects"><span className={style.menuFooter}> Projects</span></a></li>
                    </ul>
                </div>
                
            </nav>

            <div className={style.copywright}>© All rights reserved </div>

        </div>
    )
}

export default Footer