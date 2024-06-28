




export const fetchBurgerApi = async ()=> {
    try {
    const getBurgers = await  fetch('http://localhost:3000/api/services')
    const burgers = await getBurgers.json()

        return burgers
    } catch (error) {
        console.error(error)
    }

}