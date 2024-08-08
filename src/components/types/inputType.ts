import { userFormType } from "@/app/admin/page";
import {  UseFormRegister } from "react-hook-form";

export interface InputType {
    name:string,
    label:string,
    type:string,
    register: UseFormRegister<userFormType>
}