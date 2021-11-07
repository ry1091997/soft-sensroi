import React from "react";

function Create(props) {
  // console.log(props.handleClick);
  return (
    <div className="grid">
      {props.userData.map((item, index) => {
        return (
          <div key={item.id} className="gridItem">
            <h2>{item.category}</h2>
            <img src={item.image} className="imgClass" alt="" />
            <p className="title">{item.title}</p>
            <p className="price">Cost:{item.price}</p>
            <button
              className="cartButton"
              onClick={() => props.handleClick(index)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Create;
