
import style from "./style.module.scss";
import { Wrapper } from "@/components/Wrapper";
import { ShowCartsFavorites } from "./ShowCartsFavorites";

export default  function cartStorage() {

  return (
    <Wrapper>
      <section className={style.wrapperCart}>
      <ShowCartsFavorites />
      </section>
    </Wrapper>
  );
}
