import React from "react";

function Header(props) {
  return (
    <div className="container">
      <h1>{props.check ? "Home Page" : "CartPage"}</h1>
      {!props.check && (
        <button className="headerButton" onClick={() => props.handleClick()}>
          Click
        </button>
      )}
      {!props.check && (
        <p className="cartDescription">For home press "Click" button</p>
      )}
    </div>
  );
}

export default Header;
