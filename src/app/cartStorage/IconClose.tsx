
import { deleteBurger } from "@/utils/deleteBurger"
import { CgClose } from "react-icons/cg"
interface TIconClose {
    id:number;
    handleRemoveFavorites: (id:number) => void
}
export const  IconClose = ({id, handleRemoveFavorites}:TIconClose) => {


    return (
        <span onClick={() => handleRemoveFavorites(id)}>
            <CgClose size={25} /></span>
    )
}