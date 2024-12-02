import logo from '../../assets/sofiawoodlogo.svg'
import style from './NavBar.module.css'

function NavBar(props:any) {
    const {setSelectedComponent} = props;

    return (
        <div className={style['main-header']}>
            <div className={`${style.logoWrapper}`}>
                <img src={logo} alt="logo" onClick={() => {setSelectedComponent('home')}}/>
            </div>

            <nav className={style.linksWrapper}>
                <div className={style.mainMenu}>
                    <ul>
                        <li><a className={style.menuLink} onClick={() => {setSelectedComponent('home')}}>Home</a></li>
                        <li><a className={style.menuLink} onClick={() => {setSelectedComponent('about')}}>About</a></li>
                        <li><a className={style.menuLink} onClick={() => {setSelectedComponent('projects')}}>Projects</a></li>
                
                    </ul>
                </div>
                
            </nav>
            <div className={style.navButton}>
                <a href="https://www.linkedin.com/in/sofia-oliveira-/" target="_blank" rel="">
                    <button className={style.button}>Let's talk</button>
                    </a>
            </div>
        </div>
        )
}

export default NavBar;