import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList'
import Title from '../Title';

import { useParams } from 'react-router-dom';


const perfumes = [
  { id: 1, price: 48.450, image: "https://www.juleriaque.com.ar/good-girl-edp-31865/p?skuId=778", category: 'femenino', title: "GOOD GIRL EDP 80 ML AG21" },
  { id: 2, price: 51.200, image: "https://www.juleriaque.com.ar/miss-dior-edp-860/p?skuId=2569", category: 'femenino', title: "MISS DIOR EDP 100 ML SP21L" },
  { id: 3, price: 41.550, image: "https://www.juleriaque.com.ar/invictus-platinum-edp-81671/p?skuId=2321", category: 'masculino', title: "INVICTUS PLATINUM EDP 100 ML" },
  { id: 4, price: 50.400, image: "https://www.juleriaque.com.ar/sauvage-edp-47960/p?skuId=1079", category: 'masculino', title: "SAUVAGE EDP 100 ML" },
  { id: 5, price: 59.900, image: "https://www.juleriaque.com.ar/bleu-de-chanel-edp-22374/p?skuId=625", category: 'masculino', title: "BLEU DE CHANEL EDP 150 ML" },
];


const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(perfumes);
      }, 2000);
    });
    if (categoriaId){
      getData.then(res => setData(res.filter(masculino => masculino.category === categoriaId)));
    }else{
      getData.then(res => setData(res));
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