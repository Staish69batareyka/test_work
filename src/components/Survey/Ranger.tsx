import style from "../../Core.module.scss"
import { useAppDispatch, useAppSelector } from "./../Features/hooks.ts"
import { setAnswer } from "./../../components/Features/store/surveySlice.ts"

export default function Ranger({ name }: { name: string }) {
    const dispatch = useAppDispatch()
    const selected = useAppSelector(state => state.survey.answers[name])

    const handleChange = (value: string) => {
        dispatch(setAnswer({ questionId: name, answer: value }))
    }

    const options = [
        { id: "very-rarely", label: "Очень редко" },
        { id: "rarely", label: "Редко" },
        { id: "sometimes", label: "Иногда" },
        { id: "often", label: "Часто" },
        { id: "always", label: "Всегда" },
    ]

    return (
        <div className="flex items-center gap-10 ml-5">
            {options.map(opt => (
                <div className="flex items-center" key={opt.id}>
                    <input
                        className={style.radio}
                        type="radio"
                        name={name}
                        id={`${name}-${opt.id}`}
                        checked={selected === opt.id}
                        onChange={() => handleChange(opt.id)}
                    />
                    <label htmlFor={`${name}-${opt.id}`} className={style.label_radio}>
                        {opt.label}
                    </label>
                </div>
            ))}
        </div>
    )
}
