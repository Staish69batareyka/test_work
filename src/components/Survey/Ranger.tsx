import style from "./../../Core.module.scss"

export default function Ranger(
    {
        name,
        onChange,
    }: {
    name: string;
    onChange: (value: string) => void;
    })
    {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="flex items-center gap-10 ml-5">
            {["Очень редко", "Редко", "Иногда", "Часто", "Всегда"].map((label, index) => {
                const value = ["very-rarely", "rarely", "sometimes", "often", "always"][index];
                return (
                    <div key={value} className="flex items-center">
                        <input
                            className={style.radio}
                            type="radio"
                            name={name}
                            id={`${name}-${value}`}
                            value={value}
                            onChange={handleChange}
                        />
                        <label htmlFor={`${name}-${value}`} className={style.label_radio}>
                            {label}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
