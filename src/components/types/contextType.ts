import { SetStateAction } from "react";
import { IBurger } from "./burgerType";

export interface  IcontextFavorites {
    setCardsFavorites: React.Dispatch<SetStateAction<IBurger[]>>;
    handleAddFavorites: (card:IBurger)=> void;
    handleRemoveFavorites:(id:number) => void;
    cardsFavorites: IBurger[]
}