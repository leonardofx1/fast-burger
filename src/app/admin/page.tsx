import { Wrapper } from '@/components/Wrapper'
import { Input } from './input'
import style from './style.module.scss'




const admin = () => {


    return (
        <Wrapper>
            <form action="" className={style.form}>

                <Input label='Nome do hambúrguer' name='title' type='text' />
                
                <Input label='Preço' name='price' type='number' />
                  
                <Input label='Estoque' name='amount' type='number' />
                
                <Input label='Tempo de preparação' name='time' type='number' />

               <div className={style.wrapperDescription}>
                <span>Descrição do lanche.</span>
               <textarea name="" id=""></textarea>
               </div>
                
                <Input label='Escolha uma imagem do produto' name='img' type='file' />

            </form>

        </Wrapper>
    )
}

export default admin