import React, { useContext } from 'react'
import './Item.css';
import {Link} from 'react-router-dom'


const Item = ({info}) => {
  constnombre = useContext(CartContext)
  console.log('Item:', nombre);

  return (
    <Link to={'/detalle/${info.id}'} className='perfumes'>
        <img src={info.image} alt="" />
        <p>{info.title}</p>
    </Link>
  );
}

export default Item;