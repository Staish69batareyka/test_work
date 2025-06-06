import style from "../../Core.module.scss";

export default function Welcome(){
    return(
        <div className="flex flex-col items-center justify-center mt-52 gap-10">
            <div className="text-5xl font-bold">Добро пожаловать!</div>
            <div>Нажмите "старт", чтобы начать</div>
            <button className={style.btn}>Старт</button>
        </div>
    )
}