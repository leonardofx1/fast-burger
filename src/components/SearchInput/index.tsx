import { BsSearch } from "react-icons/bs";
import style from './style.module.scss'



export const SearchInput = () => {



    return (
        <form >
            <div className={style.containerSearch}>
                <button><BsSearch /></button>
                <input type="text" name="search" id="" />
            </div>
        </form>
    )
}