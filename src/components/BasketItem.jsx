import React from 'react'

export const BasketItem = (props) => {
    const {

        mainId,
        displayName,
        finalPrice,

        quantity,
        removeBasketItem,
        incrementQuantity,
        decrementQuantity,

    } = props


    return (
        <li className="collection-item">

            {displayName.toLowerCase()}
            <i className='material-icons  basket__item-icon basket__quantity' onClick={() => incrementQuantity(mainId)}>add</i>
            x{quantity}  <i className='material-icons  basket__item-icon basket__quantity ' onClick={() => decrementQuantity(mainId)}>remove</i>= {finalPrice * quantity}

            <span>
                <i className='material-icons right basket__item-icon' onClick={() => removeBasketItem(mainId)}>close</i>
            </span>

        </li>
    )
}
