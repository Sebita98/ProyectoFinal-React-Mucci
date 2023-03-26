import React from 'react'
import Item from '../Item'

const ItemList = ({data = []}) => {
  return (
    //la key es como un identificador para que react sepa que item es cada uno
    data.map(perfumes => <Item key={perfumes.id} info={perfumes} />)
  );
}

export default ItemList;