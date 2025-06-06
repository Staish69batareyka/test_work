import style from "../../Core.module.scss";

export default function Ranger(){
    return(
        <>
            <div className="flex items-center gap-10 ml-5">
                <div className="flex items-center"><input className={style.radio} type="radio" id="not-often"/><label htmlFor="not-often" className={style.label_radio}>Очень редко</label></div>
                <div className="flex items-center"><input className={style.radio} type="radio" id="idk"/><label htmlFor="idk" className={style.label_radio}>Редко</label></div>
                <div className="flex items-center"><input className={style.radio} type="radio" id="sometimes"/><label htmlFor="sometimes" className={style.label_radio}>Иногда</label></div>
                <div className="flex items-center"><input className={style.radio} type="radio" id="often"/><label htmlFor="often" className={style.label_radio}>Часто</label></div>
                <div className="flex items-center"><input className={style.radio} type="radio" id="always"/><label htmlFor="always" className={style.label_radio}>Всегда</label></div>
            </div>
        </>
    )
}