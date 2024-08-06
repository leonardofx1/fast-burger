
export const updateBurger = async () => {
   
       const obj = {
        urlImage:'leo',
        name:'leo',
         price:5,
          amount:5 ,
           time: 5 , id:10
       }
        const res = await fetch('http:///localhost:3000/api/services/', {
                method:'PUT',
                headers: {
                        'Content-Type':'application/json'
                },
                body: JSON.stringify(obj)
        })
}