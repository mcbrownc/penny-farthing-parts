import { createSelector } from "reselect"

const newCartCount = newCartItems.reduce((total, cartItem) => {
    return total += cartItem.quantity
  }, 0)

  const newCartTotal = newCartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price
  }, 0)