import React, { useEffect, useState } from "react";
import axios from "axios";
import Create from "./Components/Create";
import Header from "./Components/Header";
import Cart from "./Components/Cart";

function App() {
  const [userData, setUserData] = useState([]);
  let [check, setCheck] = useState(true);
  let [cartItems, setCartItem] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products").then((result) => {
    //   result.json().then((resp) => {
    //     // console.log(resp);
    //     setUserData(resp);
    //   });
    // });
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleClick(ind) {
    setCheck((prevItem) => {
      return (check = check === false ? true : false);
    });
    check &&
      setCartItem((prevItem) => {
        return [
          ...prevItem,
          userData.filter((item, index) => {
            return index === ind;
          })
        ];
      });
  }

  function deleteCartItem(ind) {
    setCartItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return ind !== index;
      });
    });
  }

  return (
    <div>
      <Header check={check} handleClick={handleClick} />
      {check ? (
        <Create userData={userData} handleClick={handleClick} />
      ) : (
        <Cart cartItems={cartItems} delete={deleteCartItem} />
      )}
    </div>
  );
}

export default App;


