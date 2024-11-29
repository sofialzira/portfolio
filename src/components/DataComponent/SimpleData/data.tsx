import style from './data.module.css'


function Data(props:any) {
    const { value, description } = props;

    return(


    <div className={style.dataContainer}>
        <div className={style.valueContainer}>
         <span className={style.value}>{value}</span>
    </div>
        <div className={style.descriptionContainer}>
        <span className={style.description}>{description}</span>
    </div>


     </div>
    )
}

export default Data