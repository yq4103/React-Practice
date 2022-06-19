import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnLight, setBtnLight] = useState(false);

  const cartCtx = useContext(CartContext);
  const cartItemsCount = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnLight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    const timer = setBtnLight(true);
    setTimeout(() => {
      setBtnLight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
