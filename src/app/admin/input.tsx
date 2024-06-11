import { InputType } from "@/components/types/inputType"





export const Input = ({type = 'text', name, label }:InputType) => {


    return (
        <label htmlFor="">
            {label}
             <input type={type} name={name}/>
        </label>
)
}