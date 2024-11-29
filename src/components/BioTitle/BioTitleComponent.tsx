import style from './BioTitleComponent.module.css'



function BioTitle(props: any) {

    const { titleText, subtitleText } = props

    return(

        <div className={style.titleContainer}>
            
            <div className={style.title}>{titleText}</div>
            <div className={style.subtitle}>{subtitleText}</div>
            
        </div>

    )
}

export default BioTitle