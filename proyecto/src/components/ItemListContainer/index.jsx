import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList'
import Title from '../Title';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';





const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection (querydb, 'products');
    if (categoriaId){
      const queryFilter = query(queryCollection, where('category', '==', 'categoriaId'))
    }else{
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...res.data()}))))
    }
  }, [categoriaId])


  

  return (
    <>
      <Title greeting='Seba' />
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer