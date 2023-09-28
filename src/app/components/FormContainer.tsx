import { FC, ReactElement } from "react"

type IProps = {
    children : ReactElement;
    title : string;
}

const FormContainer:FC<IProps>=({children , title})=>{
    return (
        <div className="shadow-xl rounded-xl w-11/12 max-w-md">
            <h1 className="capitalize bg-sky-200 text-slate-900 p-6 rounded-t-xl font-bold text-xl">{title}</h1>
            <div className="bg-white p-6 rounded-b-xl">
                {children}
            </div>

        </div>
    )
}

export default FormContainer;