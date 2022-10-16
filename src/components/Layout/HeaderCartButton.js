import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber , item) => {
    return curNumber + item.amount
  } , 0);
  console.log(cartCtx)
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
