import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart';
import {Link} from 'react-router-dom';
import {getFirestore} from 'firebase/firestore';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name:'Sebastian',
            email:'mucci310@gmial.com',
            phone:'1139460376',
            address:'calle 10'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),      
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection (db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }


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
            <button onClick={handleClick}>Emitir comprar</button>
        </>
    )
}

export default Cart
