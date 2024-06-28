


export const deleteBurger =async () => {
    const id  = 3
    const res = await fetch('http://localhost:3000/api/services', {
        method:'DELETE',
        body: JSON.stringify(id)
    })
}