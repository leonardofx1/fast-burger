"use client";
import { useForm } from "react-hook-form";
import { storage } from "@/firebase/firebaseConfig";
import { Wrapper } from "@/components/Wrapper";
import { Input } from "./input";
import style from "./style.module.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { uploadImage } from "@/utils/uploadImage";
import { ChangeEvent, useState } from "react";
import { PostCreateBurger } from "@/utils/postCreateBurger";

export const schemaCreateBurger = z.object({
  name: z.string().min(3, { message: "Insira um nome válido." }),
  price: z.coerce.number().positive({ message: "Insira um preço válido EX: 30 R$." }),
  amount: z.coerce.number().positive({ message: "Quantos items no estoque." }),
  time: z.coerce.number().positive({ message: "Tempo de preparação do lanche" }),
  imgUrl:z.string({message:'Escolha uma imagem.'} ).min(5),
  description: z.string({message:'Insira uma descrição do lanche .'})
});
export type userFormType = z.infer<typeof schemaCreateBurger>;
const admin = () => {
    const [errorPost, setErrorPost] = useState({statusError:false,  message:''})

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<userFormType>({
    resolver: zodResolver(schemaCreateBurger),
  });
  const handlePostBurger =async  (data: userFormType) => {
    try{
      const res = await  PostCreateBurger(data)
     
    
    }
    catch(error) {
      console.error(error)
      setErrorPost({statusError:true, message:'Não foi possivel criar o lanche.'})
    }


      

  };
  const handleChangeImg = async (data:ChangeEvent<HTMLInputElement>) => {
        const resUrl = await uploadImage(data)
        typeof resUrl == 'string' && setValue('imgUrl', resUrl)
  }

  return (
    <Wrapper>
      <form className={style.form} onSubmit={handleSubmit(handlePostBurger)}>
        <input onChange={handleChangeImg} name="img" type="file" />
        {errors?.imgUrl?.message && <span> {errors?.imgUrl?.message}</span>}

        <Input
          register={register}
          label="Nome do hambúrguer"
          name="name"
          type="text"
        />
        {errors?.name?.message && <span>{errors.name?.message}</span>}
        <Input register={register} label="Preço" name="price" type="text" />
        {errors?.price?.message && <span> {errors.price?.message}</span>}
        <Input
          register={register}
          label="Estoque"
          name="amount"
          type="number"
        />
        {errors?.amount?.message && <span>{errors.amount?.message}</span>}
        <Input
          register={register}
          label="Tempo de preparação"
          name="time"
          type="text"
        />
        {errors?.time?.message && <span>{errors?.time?.message}</span>}
        <div className={style.wrapperDescription}>
          <p>Descrição do lanche.</p>
          <textarea onChange={(data:ChangeEvent<HTMLTextAreaElement>) => {setValue('description', data.target.value)}} name="" id=""></textarea>
        </div>

        <button type="submit">Cadastrar</button>

      </form>
    </Wrapper>
  );
};

export default admin;
