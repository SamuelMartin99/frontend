import React from 'react';
import './Item.css';


const Item = (props) =>{
  return (
    <div className='item'>
      <img className='item-image' src={props.imageUrl} alt="" />
      <h3 className='item-name'>{props.name}</h3>
      <div className='item-price'>
        <p>{props.price}</p>
      </div>
      <div className='item-description'>
        {props.description}
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  )
}

export default Item;