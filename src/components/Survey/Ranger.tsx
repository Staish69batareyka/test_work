import style from "../../Core.module.scss";

export default function Ranger({name}: {name:string}){
    return(
        <>
            <div className="flex items-center gap-10 ml-5">
                <div className="flex items-center">
                    <input className={style.radio} type="radio" name={name} id={`${name}-very-rarely`}/>
                    <label htmlFor={`${name}-very-rarely`} className={style.label_radio}>Очень редко</label>
                </div>
                <div className="flex items-center">
                    <input className={style.radio} type="radio" name={name} id={`${name}-rarely`}/>
                    <label htmlFor={`${name}-rarely`} className={style.label_radio}>Редко</label>
                </div>
                <div className="flex items-center">
                    <input className={style.radio} type="radio" name={name} id={`${name}-sometimes`}/>
                    <label htmlFor={`${name}-sometimes`} className={style.label_radio}>Иногда</label>
                </div>
                <div className="flex items-center">
                    <input className={style.radio} type="radio" name={name} id={`${name}-often`}/>
                    <label htmlFor={`${name}-often`} className={style.label_radio}>Часто</label>
                </div>
                <div className="flex items-center">
                    <input className={style.radio} type="radio" name={name} id={`${name}-always`}/>
                    <label htmlFor={`${name}-always`} className={style.label_radio}>Всегда</label>
                </div>
            </div>
        </>
    )
}