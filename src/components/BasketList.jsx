import React from 'react'
import { BasketItem } from './BasketItem';

export const BasketList = (props) => {
    const { order, handleBasketShow, removeBasketItem, addQuantity, incrementQuantity, decrementQuantity } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.finalPrice * el.quantity;
    }, 0);





    return (
        <ul className="collection with-header basket-list">
            <li className='collection-header green lighten-3'><h5>Корзина</h5></li>
            {

                order.length ? order.map((item =>
                    <BasketItem key={item.mainId}{...item} item={item}
                        removeBasketItem={removeBasketItem}
                        addQuantity={addQuantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity} />))
                    : <li className="collection-item ">Коризина пуста </li>
            }
            <li className='collection-item green lighten-3'>Общая стоимость: {totalPrice}

            </li>
            <li className='collection-item '>
                <button className='btn-small '>Оформить</button>

            </li>

            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>



        </ul>
    )
}
