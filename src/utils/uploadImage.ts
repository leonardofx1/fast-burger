import { storage } from "@/firebase/firebaseConfig";
import { UploadResult, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent } from "react";


export const uploadImage =async (data:ChangeEvent<HTMLInputElement>) => {


    const imgFile = data.target !== null && data.target.files![0] 


    const imagesRef = ref(storage, `images/ ${data.target.value}`);
    console.log ( 'imagens refs : ',imgFile,imagesRef)

  
        const res: UploadResult = await uploadBytes(imagesRef, imgFile as File)

        return  getDownloadURL(res.ref)
    }

