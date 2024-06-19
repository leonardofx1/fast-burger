import { userFormType } from "@/app/admin/page";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputType {
    name:string,
    label:string,
    type:string,
    register: UseFormRegister<userFormType>
}