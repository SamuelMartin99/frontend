import React from 'react'
import all_product from '../Assets/all_product';
import Item from '../Item/Item';
import './Card.css'

const Card = () => {
  return (

    <div className="cardComponent">
      {all_product.map((item,i) => {

        return (

          <Item
          key={i} id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
        />



        )}

      )}

    </div>

  );
}

export default Card;