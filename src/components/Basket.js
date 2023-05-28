import React from "react"
const Basket = ({basketList}) => {
    const basketListDisplay = basketList.map((book, index)=> {
        
        return(
            <li key={index}>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.price}</p>
            </li>
        )

    })
   return (
    <ul>
       {basketListDisplay}
       
    </ul>
      
    
   )
}

export default Basket;