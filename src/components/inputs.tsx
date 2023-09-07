import { FC, useState } from "react"
import { InputAttributes, submitBtn } from "../schema/interface"
import { Eye, EyeOff } from "./icons/icons"

export const LabelInput: FC<InputAttributes> = ({ className, id, label, placeholder, type, name, error, touch, blur, change }) => {
    return (
        <div className="label__input">
            <label htmlFor={name}>{label}</label>
            <input autoComplete="on" type={type} name={name} onBlur={blur} id={id} placeholder={placeholder} className={className} onChange={change} />
            {error && touch && <p className="error">{error}</p>}
        </div>
    )
}

export const PasswordInput: FC<InputAttributes> = ({ className, id, label, placeholder, name, error, touch, blur, change }) => {

    const [type, setType] = useState<any>("password")
    const setIconType = () => setType(!type)

    return (
        <div className="input__password">
            <label htmlFor={name}>{label}</label>
            <div className={className}>
                <input autoComplete="off" type={type ? "password" : "text"} name={name} onBlur={blur} id={id} placeholder={placeholder} onChange={change} />
                {type ? <EyeOff onClick={setIconType} /> : <Eye onClick={setIconType} />}
            </div>
            {error && touch && <p className="error">{error}</p>}
        </div>
    )
}

export const SubmitBtn: FC<submitBtn> = ({ content, disable }) => {
    return (
        <button disabled={disable} type="submit">{content}</button>
    )
}