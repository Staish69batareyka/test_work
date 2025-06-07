import style from "./../../Core.module.scss"
import Ranger from "./Ranger.tsx";
import {data} from "./../data.tsx"
import {Link} from "react-router-dom";

import thunbs_1 from "./../../assets/img/thumbs-up.svg"
import thunbs_2 from "./../../assets/img/thumbs-up_1.svg"
import arrow_l from "./../../assets/img/arrow-left.svg"
import arrow_r from "./../../assets/img/forward-right.svg"

export default function Survey(){



    return(
        <>
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
                        <div className="flex items-center">
                            <input className={style.radio} type="radio" name="gender" id="man"/>
                            <label htmlFor="man" className={style.label_radio}>Мужской</label>
                        </div>
                        <div className="flex items-center">
                            <input className={style.radio} type="radio" name="gender" id="woman"/>
                            <label htmlFor="woman" className={style.label_radio}>Женский</label>
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <label className="block">Имя родителя, заполняющего анкету</label>
                    <input type="text" className={style.input} placeholder="Введите свое ФИО"/>
                </div>

            </div>

            <div className="bg-red-50 p-5 rounded-3xl text-red-600 my-10">
                <div className="flex gap-5">
                    <img src={thunbs_1} className="size-10"/>
                    <div>Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа,
                        отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель.
                        Отвечайте максимально честно и искренне, так как от этого зависит точность оценки
                        психоэмоционального развития Вашего ребенка.<br/><br/></div>
                </div>
                <div className="flex gap-5">
                    <img src={thunbs_2} className="size-10"/>
                    <div>Все вопросы обязательны к заполнению</div>
                </div>
            </div>


            {data.map((option, oIndex) => (
                <div className="my-10" key={oIndex}>
                    <div className={style.h1}>{option.title}</div>
                    {option.questions.map((ques, qIndex) => (
                        <div key={qIndex}>
                            <div className="text-xl my-10">{ques}</div>
                            <Ranger name={`option${oIndex}-question${qIndex}`}></Ranger>
                        </div>
                        )
                    )}
                </div>
            ))}

            <div className="my-10">
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
        </div>
            <div className="flex justify-between items-end p-10">
                <div className="text-gray-500">Шаг 2/3</div>
                <div className="flex justify-between items-end gap-2">
                    <Link to="/upload-photo"><button className={`${style.btn2} flex gap-5 items-center`}><img src={arrow_l} className="size-10"/>К загрузке рисунков</button></Link>
                    <Link to="/results"><button className={`${style.btn} flex gap-5 items-center`}>Узнать результаты <img src={arrow_r} className="size-10 stroke-white"/></button></Link>
                </div>

            </div>

        </>
    )
}