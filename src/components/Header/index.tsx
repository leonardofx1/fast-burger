
import style from './style.module.scss'
import { LiaHamburgerSolid } from "react-icons/lia";
import { GiFastArrow } from "react-icons/gi";

export const Header = ()=> {


    return (
      <header className={style.header}>
          <h1>
          <LiaHamburgerSolid />
            Fast Burger
        </h1>
        <nav>
            <ul>
                <li>Lanches</li>
                <li>Destaques</li>
            </ul>
        </nav>

        <ul>
            <li>
                Login
            </li>
            <li>
                Cadastre-se
            </li>
        </ul>
      </header>
    )
}