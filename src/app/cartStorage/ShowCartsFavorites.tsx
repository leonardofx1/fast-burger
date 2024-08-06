"use client";

import { IBurger } from "@/components/types/burgerType";
import useFavorites from "../Hooks/useFavorites";
import style from "./style.module.scss";
import Image from "next/image";
import { IconClose } from "./IconClose";
import { CardFavorite } from "./cardFavorite";

export const ShowCartsFavorites = () => {
  const { cartsFavorites, isFavorite } = useFavorites();
  
 

  return (
    <>
      {cartsFavorites === null || cartsFavorites === undefined ? (
        <p>sem itens no carrinho</p>
      ) : (
        cartsFavorites.map((cart) => < CardFavorite cart={cart} />
        )
      )}
    </>
  );
};
