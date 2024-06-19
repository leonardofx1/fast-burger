import { InputType } from "@/components/types/inputType";


type Tname = "name" | "price" | "amount" | "time";


export const Input = ({ type = 'text', name, label, register }: InputType) => {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        {...register(name as Tname )}
   
      />
    </label>
  );
};