
import style from './style.module.scss'
import { SearchInput } from "@/components/SearchInput";
import { Wrapper } from "@/components/Wrapper";
import { CardBurger } from "@/components/CardBurger";
import Image from "next/image";
import imageo from '../../public/imageo.png'
import { fetchBurgerApi } from "@/utils/fetchBurgerApi";

import { IBurger } from "@/components/types/burgerType";

export default async function Home() {
  const res = await fetchBurgerApi()

  return (
    <main className={style.main}>

      <section className={style.containerBanner}>
        <div className={style.banner}>
          <Image src={imageo} unoptimized quality={100} alt='burger' /> <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos tempore, maxime exercitationem laboriosam, odio facilis nobis recusandae vitae corporis earum ipsa consectetur veritatis quisquam rem in non saepe quod?
          </span>
        </div>
      </section>
      <Wrapper >
        <SearchInput />


        <section className={style.burgerWrapper}>

          <h2>Descubra o Mundo dos Hambúrgueres Gourmet</h2>

         
         {res.map((burger:IBurger) =>  <CardBurger href='./burgerDetails/1' {...burger}/>)}
        </section>     <section className={style.burgerWrapper}>
          <h2>Explore o Sabor Único do Nosso Hambúrguer Vegano</h2>
         

        </section>
      </Wrapper>

    </main>
  );
}
