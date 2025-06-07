import React, { useRef } from "react";
import upload from "./../../assets/img/upload.svg";
import refresh from "./../../assets/img/refresh.svg";

interface Props {
    file: File | null;
    onFileChange: (file: File | null) => void;
}

export default function UploadBtn({ file, onFileChange }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
            if (!allowedTypes.includes(selectedFile.type)) {
                alert("Недопустимый формат файла.");
                return;
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                alert("Файл должен быть меньше 5 МБ.");
                return;
            }
            onFileChange(selectedFile);
        }
    };

    return (
        <>
            <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                ref={inputRef}
                onChange={handleChange}
            />
            <div className="bg-gray-100 rounded-2xl p-20 flex items-center justify-center relative cursor-pointer" onClick={handleClick}>
                {file ? (
                    <>
                        {file.type.startsWith("image/") ? (
                            <img
                                src={URL.createObjectURL(file)}
                                alt="preview"
                                className=" object-cover rounded-2xl"
                            />
                        ) : (
                            <div className="text-center text-sm">PDF<br />загружен</div>
                        )}
                        <div className="absolute left-2/5 top-2/5 bg-blue-200 p-5 rounded-2xl hover:bg-blue-100" onClick={(e) => { e.stopPropagation(); onFileChange(null); }}>
                            <img src={refresh} alt="replace" className=" size-12" />
                        </div>
                    </>
                ) : (
                    <div className="bg-blue-200 p-5 rounded-2xl hover:bg-blue-100">
                        <img src={upload} className=" size-12" />
                    </div>
                )}
            </div>
        </>
    );
}
