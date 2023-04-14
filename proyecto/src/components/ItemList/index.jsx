import React from 'react'
import Item from '../Item'
import './ItemList.css';


const ItemList = ({data = []}) => {
    return (
        <>
            {
                data.length
                ?  (
                    data.map(perfumes => (
                        <Item key={perfumes.id} info={perfumes} />
                    ))
                )
                : <div className="loader"></div>
            
            }
        </>        
    );
}

export default ItemList;