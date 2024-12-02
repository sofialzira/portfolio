import style from './FooterComponent.module.css';
import logo from '../../assets/sofiawoodlogo.svg'

function Footer(props:any) {
    const {setSelectedComponent} = props;
    return(
        <div className={style.footer}>
        <div className={style.logoContainer}>
            <img src={logo} alt="logo" />
        </div>

         <nav className={style.linksWrapper}>
                <div className={style.mainMenu}>
                    <ul>
                        <li><a onClick={() => {setSelectedComponent('home')}}> <span className={style.menuFooter}> Home</span></a></li>
                        <li><a onClick={() => {setSelectedComponent('about')}}><span className={style.menuFooter}> About</span></a></li>
                        <li><a onClick={() => {setSelectedComponent('projects')}}><span className={style.menuFooter}> Projects</span></a></li>
                    </ul>
                </div>
                
            </nav>

            <div className={style.copywright}>© All rights reserved </div>

        </div>
    )
}

export default Footer