import React from 'react'
import { Good } from './Good'

export const GoodsList = (props) => {

    if (!props.goods.length) {
        return <h3>Nothing</h3>
    }
    return (
        <div className='goods'>
            {props.goods.map((good) => <Good key={good.mainId} {...good} orderBuy={props.orderBuy} handlePageCartShow={props.handlePageCartShow}/>)}
        </div>
    )
}
