"use client";
import { useState } from "react";
import style from "../style.module.scss";

export const OrderByQuantity = ({ price }: { price: number }) => {
  const [count, setCount] = useState<number>(1);

   const handleDecrement = () =>  {
    if(count === 1 ) return

    setCount((old) => old - 1)
   }
   const handleIncrement = () => {
    setCount((old) => old + 1);
   }
  return (
    <>
      <span>porção</span>
      <div>
        <button
          className={style.btnBurger}
          onClick={handleDecrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className={style.btnBurger}
          onClick={
            handleIncrement
          }
        >
          +
        </button>
      </div>
      <div className={style.wrapperOrder}>
        <strong className={style.value}>R$ {price * count}</strong>
        <button className={style.btnOrder}>Peça agora</button>
      </div>
    </>
  );
};
