import React from 'react'
import Model from '../UI/Model';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1' , name : 'Sushi' , amout : 2, price : 12.99}].map(item => <li>{item.name}</li>)}</ul>;
  return (
    <Model onClose={props.onhideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>23.4</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onhideCart} className={classes['button-alt']}>CLose</button>
            <button className={classes.button}>Order</button>
        </div>
    </Model>
  )
}

export default Cart