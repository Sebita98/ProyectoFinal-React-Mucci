import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart';
import {Link} from 'react-router-dom';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();


    if (cart.lenght === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras </Link>
            </>
        );
    }



    return (
        <>
            {
                cart.map (product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
        </>
    )
}

export default Cart
