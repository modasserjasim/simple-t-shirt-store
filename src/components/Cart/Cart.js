import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    const { name, price } = cart;
    // let cartTotal = 0;
    // for (const tshirt of cart) {
    //     cartTotal = cartTotal + tshirt.price;
    // }

    return (
        <div>
            <h3>Order Summary</h3>
            {
                cart.length > 0 && <p>Review your order</p>
            }
            {
                cart.map(tshirt =>

                    <p key={tshirt._id}>{tshirt.name}
                        <button onClick={() => handleRemoveItem(tshirt)}>X</button></p>
                )
            }
        </div>
    );
};

export default Cart;

// Conditional rendering 