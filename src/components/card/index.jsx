import React from 'react'

import './card.css'
export default function Card(item) {
    console.log(item.item.itemName)
 
  return (
    <div className="card_container text-center">
        <div className="card_img">
          <img src={item.item.imgUrl} alt="aa" className="product_img" />
        </div>
        <h3 className="product_title">{item.item.itemName}</h3>
        <p className="product_des">
          {item.item.itemDes}
        </p>
        <div className="product_Prices_div">
          <span className="product_price">Rs: {item.item.itemUnitPrice}</span>
          <span className="product_unit">/{item.item.itemUnitName}</span>
        </div>
        <p className="product_category">category: {item.item.category}</p>

        <div className="card_btn_div">
          <button className="card_btn btn btn-success">Add to Card</button>
        </div>
      </div>
  )
}