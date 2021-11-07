import React from "react";

function Cart(props) {
  // console.log(props.cartItems);
  return (
    <div className="grid">
      {props.cartItems.map((item, index) => {
        return (
          <div key={item[0].id} className="gridItem">
            <h2>{item[0].category}</h2>
            <img src={item[0].image} className="imgClass" alt="" />
            <p className="title">{item[0].title}</p>
            <p className="price">Cost:{item[0].price}</p>
            <button className="cartButton" onClick={() => props.delete(index)}>
              delete item
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
