import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import cartContext from "../../strore/cart-context";

import classes from "./Header.module.css";

const Header = ({ onShow }) => {
  const CartCtx = useContext(cartContext);

  const numberOfCartItems = CartCtx.products.reduce((currNum, product) => {
    return currNum + product.quantity;
  }, 0);
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.list}>
          <h1 style={{ padding: "8px", fontSize: "40px" }}>Product Catalog</h1>
        </div>

        <div className={classes.button}>
          <Button variant="outline-info" bg="dark" onClick={onShow}>
            Cart
          </Button>
          <p>{numberOfCartItems}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
