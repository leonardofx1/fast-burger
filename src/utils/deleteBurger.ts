


export const deleteBurger =async (id:number) => {
    
    const res = await fetch('http://localhost:3000/api/services', {
        method:'DELETE',
        body: JSON.stringify(id)
    })
}