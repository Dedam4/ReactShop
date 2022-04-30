import React from 'react'

export const Good = (props) => {
    const {
        mainId,
        displayName,
        price:{finalPrice},
        displayAssets:[{full_background}],
        displayDescription,


        handlePageCartShow,
        orderBuy
    } = props;


    return (
        <div className="card" id={mainId}>
            <div className="card-image" onClick={() => handlePageCartShow(mainId)}>
                <img src={full_background} alt={displayName} />
            
            </div>
            <div className="card-content">
                <p>{displayDescription === '' ? displayName.toLowerCase() : displayDescription }</p>
            </div>
            <div className="card-action">
                <button onClick={()=>orderBuy({mainId, displayName, finalPrice })} className='btn'>Купить</button>
                <span className='right'>{finalPrice} USB</span>
            </div>
        </div>
    )
}
