import {Link} from 'react-router-dom';
import logo from '../../assets/sofiawoodlogo.svg'
import style from './NavBar.module.css'

function NavBar() {

    return (
        <div className={style['main-header']}>
            <div className={`${style.logoWrapper}`}>
                <Link to="/home">
                <img src={logo} alt="logo" />
                </Link>
            </div>

            <nav className={style.linksWrapper}>
                <div className={style.mainMenu}>
                    <ul>
                        <li><a className={style.menuLink} href="home">Home</a></li>
                        <li><a className={style.menuLink} href="about">About</a></li>
                        <li><a className={style.menuLink} href="projects">Projects</a></li>
                
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