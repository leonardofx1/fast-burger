import { db } from "@/db"
import { favorites, hamburger,  } from "@/schemas/schemas";

import style from   './style.module.scss'



export default  async function cartStorage () {

  const userId = 'a5f781c3-9979-470b-aec6-15384c8ae563'

  const res =  await db.execute(sql`SELECT ${hamburger}.*
FROM ${hamburger}
INNER JOIN favorites ON ${hamburger.id} = ${favorites.hamburger}
WHERE ${favorites.user} = ${userId};`)


  
  
    console.log(res, 'cartttttt')
    return(
        <p>
            você está no carrinho de compras.
        </p>
    )
}