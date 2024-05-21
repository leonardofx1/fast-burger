import { Tags } from "@/components/Tags"

import style from './style.module.scss'
import { SearchInput } from "@/components/SearchInput";
import { Wrapper } from "@/components/Wrapper";
import { CardBurger } from "@/components/CardBurger";
export default function Home() {
  return (
    <main >
      <Wrapper >
        <SearchInput />
        <div className={style.containerTags}>
          <Tags />
        </div>

        <CardBurger/>
      </Wrapper>
    </main>
  );
}
