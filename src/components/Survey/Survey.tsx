import style from "./../../Core.module.scss"

export default function Survey(){
    return(
        <div className="mx-32 my-10">
            <div>
                <div className={`${style.h1} mb-5`}>Общая информация о ребёнке</div>
                <div className="mb-10">
                    <label className="block">Имя ребёнка</label>
                    <input type="text" className={style.input} placeholder="Введите ФИО ребёнка"/>
                </div>

                <div className="mb-10">
                    <label className="block">Дата рождения ребёнка</label>
                    <input type="date" className="border-2 w-fit p-3 text-xl  rounded-xl"/>
                </div>

                <div className="mb-10">
                    <label className="block">Пол ребёнка</label>
                    <div className="flex items-center gap-10 ml-5">
                        <div className="flex items-center"><input className={style.radio} type="radio" id="man"/><label htmlFor="man" className={style.label_radio}>Мужской</label></div>
                        <div className="flex items-center"><input className={style.radio} type="radio" id="woman"/><label htmlFor="woman" className={style.label_radio}>Женский</label></div>
                    </div>
                </div>

                <div className="mb-10">
                    <label className="block">Имя родителя, заполняющего анкету</label>
                    <input type="text" className={style.input} placeholder="Введите свое ФИО"/>
                </div>

            </div>

            <div className="bg-red-50 p-5 rounded-3xl text-red-600 my-10">
                <div>
                    <div><img/></div>
                    <div>Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа,
                        отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель.
                        Отвечайте максимально честно и искренне, так как от этого зависит точность оценки
                        психоэмоционального развития Вашего ребенка.<br/><br/></div>
                </div>
                <div>
                    <div><img/></div>
                    <div>Все вопросы обязательны к заполнению</div>
                </div>
            </div>

            <div>
                <div className={style.h1}>Раздел 1. Эмоциональная сфера</div>
                <div>Как часто ребенок выражает радость и удовольствие:</div>
                <div className="flex items-center gap-10 ml-5">
                    <div className="flex items-center"><input className={style.radio} type="radio" id="not-often"/><label htmlFor="not-often" className={style.label_radio}>Очень редко</label></div>
                    <div className="flex items-center"><input className={style.radio} type="radio" id="idk"/><label htmlFor="idk" className={style.label_radio}>Редко</label></div>
                    <div className="flex items-center"><input className={style.radio} type="radio" id="sometimes"/><label htmlFor="sometimes" className={style.label_radio}>Иногда</label></div>
                    <div className="flex items-center"><input className={style.radio} type="radio" id="often"/><label htmlFor="often" className={style.label_radio}>Часто</label></div>
                    <div className="flex items-center"><input className={style.radio} type="radio" id="always"/><label htmlFor="always" className={style.label_radio}>Всегда</label></div>
                </div>
            </div>

        </div>
    )
}