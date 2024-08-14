"use client";


import { IBurger } from "@/components/types/burgerType";
import { contextFavorites } from "../../context/CardsFavorites";

import { CardFavorite } from "./cardFavorite";
import { useContext } from "react";

export const ShowCartsFavorites = () => {
  const { cardsFavorites} = useContext(contextFavorites) 
  
 

  return (
    <>
      {cardsFavorites?.length === 0  ? (
        <p>sem itens no carrinho</p>
      ) : (
        cardsFavorites.map((cart:IBurger) => < CardFavorite {...cart} />
        )
      )}
    </>
  );
};
