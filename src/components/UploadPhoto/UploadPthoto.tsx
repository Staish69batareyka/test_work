import style from "./../../Core.module.scss"
import UploadBtn from "./UploadBtn.tsx";
import important from "./../../assets/img/important.svg"
import {Link} from "react-router-dom";
export function UploadPhoto(){
    return(
        <>
            <div className="mx-32 my-10">
                <div>
                    <div className="font-bold text-2xl mb-5">Загрузите фотографии рисунков</div>
                    <div className="text-red-600 bg-red-50 rounded-full p-3 px-6 w-fit flex items-center gap-2">
                        <img src={important} className="size-5"/>
                        Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</div>
                </div>
                <div className="grid grid-cols-1 mt-24 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-3">
                        <UploadBtn></UploadBtn>
                        <div>Дом, дерево, человек</div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <UploadBtn></UploadBtn>
                        <div>Несуществующее животное</div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <UploadBtn></UploadBtn>
                        <div>Автопортрет</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-end p-10">
                <div className="text-gray-500">Шаг 1/3</div>
                <Link to="/survey"><button className={style.btn}>Далее</button></Link>
            </div>
        </>
    )
}