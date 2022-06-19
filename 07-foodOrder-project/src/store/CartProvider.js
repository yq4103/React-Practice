import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.itemPayload.price * action.itemPayload.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.itemPayload.id
    );

    const exisitngCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (exisitngCartItem) {
      const updatedItem = {
        ...exisitngCartItem,
        amount: exisitngCartItem.amount + action.itemPayload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.itemPayload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.idPayload
    );
    const exisitngCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exisitngCartItem.price;
    let updatedItems;
    if (exisitngCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.idPayload);
    } else {
      const updatedItem = {
        ...exisitngCartItem,
        amount: exisitngCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", itemPayload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", idPayload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
