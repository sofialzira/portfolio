import style from './social.module.css'
import { FaBehance } from "react-icons/fa6";

import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";




function social() {

    return(

            <div className={style.container}>
                <div className={style.circle1}>
                <a href="https://www.behance.net/sofiaoliveira-" target="_blank" rel="">
                <FaBehance size={25} color={'white'} /> </a>
                </div>
                <div className={style.circle2}>
                <a href="https://www.linkedin.com/in/sofia-oliveira-/" target="_blank" rel="">
                <ImLinkedin size={25} color={'white'}/> </a>
                </div>
                <div className={style.circle3}>
                <a href="https://www.instagram.com/lagingerlune/" target="_blank" rel="">
                <AiFillInstagram size={35} color={'white'} /> </a>
                </div>
            </div>
    )
}

export default social