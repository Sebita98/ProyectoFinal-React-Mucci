import React from 'react';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {totalProduct} = useCartContext();
  return (
    <>
      <i className='bi bi-cart2'></i>
      <span>{totalProduct()|| ''} </span>
    </>
  );
}

export default CartWidget