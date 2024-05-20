import { Tags } from "@/components/Tags"

import style from './page.module.scss'
import { SearchInput } from "@/components/SearchInput";
import { Wrapper } from "@/components/Wrapper";
export default function Home() {
  return (
    <main >
      <Wrapper >  
        <SearchInput />
        <Tags />
      </Wrapper>
    </main>
  );
}
