import { userFormType } from "@/app/admin/page";


export const  PostCreateBurger = async (data:userFormType) => {
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        };
   
        return await  fetch('http://localhost:3000/api/services', options)
      
} 