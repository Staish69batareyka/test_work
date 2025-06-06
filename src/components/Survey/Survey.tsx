import style from "./../../Core.module.scss"
import Ranger from "./Ranger.tsx";
import {data} from "./../data.tsx"

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


            {data.map((option) => (
                <div className="my-10">
                    <div className={style.h1}>{option.title}</div>
                    {option.questions.map((ques) => (
                        <div>
                            <div className="text-xl my-10">{ques}</div>
                            <Ranger></Ranger>
                        </div>
                        )
                    )}

                </div>
            ))}

            <div className="my-10">
                <div className={style.h1}>Раздел 5. Общие вопросы</div>
                <div>
                    <div className="text-xl my-10">Как вы оцениваете общее эмоциональное состояние ребёнка:</div>
                    <Ranger></Ranger>
                </div>
                <div className="my-10">
                    <label className="block">Есть ли у вашего ребенка какие-либо особенности развития или поведения,
                        о которых вы хотели бы сообщить дополнительно?</label>
                    <textarea className={style.textarea}></textarea>
                </div>
                <div className="my-10">
                    <label className="block">Какие, на ваш взгляд, сильные стороны и таланты есть у вашего ребенка?</label>
                    <textarea className={style.textarea}></textarea>
                </div>
                <div className="my-10">
                    <label className="block">Какие, на ваш взгляд, области требуют особого внимания и развития у вашего ребенка?</label>
                    <textarea className={style.textarea}></textarea>
                </div>
                <div className="my-10">
                    <label className="block">Обращались ли вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения вашего ребенка?</label>
                    <textarea className={style.textarea}></textarea>
                </div>
            </div>

            <div className="flex justify-between items-end p-10">
                <div className="text-gray-500">Шаг 2/3</div>
                <div className="flex justify-between items-end gap-2">
                    <button className={style.btn2}>К загрузке рисунков</button>
                    <button className={style.btn}>Узнать результаты</button>
                </div>

            </div>

        </div>
    )
}