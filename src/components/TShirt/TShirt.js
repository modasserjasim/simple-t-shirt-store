import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToBasket }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToBasket(tshirt)}>Add to Basket</button>
        </div>
    );
};

export default TShirt;