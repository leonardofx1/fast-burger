


export const deleteBurger =async (id:number,endPoint:string) => {
    
    const res = await fetch(`http://localhost:3000/api/${endPoint}`, {
        method:'DELETE',
        body: JSON.stringify(id)
    })
}