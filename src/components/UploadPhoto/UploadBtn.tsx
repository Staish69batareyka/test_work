import upload from "./../../assets/img/upload.svg"



export default function UploadBtn(){
    return(
        <>
            <div className="bg-gray-100 rounded-2xl p-20 cursor-pointer">
                <div className="bg-blue-200 p-5 rounded-2xl hover:bg-blue-100"><img src={upload} className="size-20 mr-1" /></div>
            </div>
        </>
    )
}