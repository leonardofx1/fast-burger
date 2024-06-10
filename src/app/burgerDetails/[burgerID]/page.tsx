
import { Wrapper } from '@/components/Wrapper'
import style from './style.module.scss'
import Image from 'next/image'
import imageo from '../../../../public/imageo.png'

import { FaStar } from 'react-icons/fa'





const burgerDetails = () => {


    return (
        <Wrapper>
            <section className={style.wrapperBurger}>
                <div className={style.burgerImage}>
                    <Image src={imageo} quality={100} unoptimized alt='desc' />
                    <div>
                        <h2>

                            Hamburger Veggie Burger

                        </h2>
                        <span  className={style.cardIconStar} >
                        <FaStar/> 4.8 - 14 mins
                        </span>
                       
                    </div>

                </div>
                <div className={style.descriptionBurger}>

                    <p>
                        Desfrute do nosso delicioso Hamburger Veggie Burger, feito com uma saborosa mistura de vegetais frescos e ervas, coberto com alface crocante, tomates suculentos e picles picantes, tudo servido em um pão torrado e macio.

                    </p>
                </div>
                <div className={style.wrapperBtn}>
                    <span>porção</span>
                    <div>
                        <button className={style.btnBurger}>-</button> 1<button className={style.btnBurger}>+</button>
                    </div>

                </div>
                <div className={style.wrapperOrder}>
                    <strong className={style.value}>R$ 25</strong>
                    <button className={style.btnOrder}>Peça agora</button>
                </div>
            </section>
        </Wrapper>
    )
}

export default burgerDetails