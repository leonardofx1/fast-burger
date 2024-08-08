


export const searchBurger = async (search:string= '')=> {
    try {
    const getBurgers = await  fetch(`http://localhost:3000/api/searchBurger/?q=${search}`)
    const burgers = await getBurgers.json()

        return burgers
    } catch (error) {
        console.error(error)
    }

}