import { useSelector, useDispatch } from 'react-redux';
import { FC, memo } from 'react';

import { selectCartItems } from '../../store/cart/cart.selector';
import { 
  addItemToCart, 
  clearItemFromCart, 
  removeItemFromCart 
} from '../../store/cart/cart.action';
import { CartItem } from '../../store/cart/cart.types';

import { 
  CheckoutItemContainer, 
  ImageContainer, 
  Name, 
  Quantity, 
  Arrow, 
  Value, 
  Price, 
  RemoveButton 
} from './checkout-item.styles'

type CheckoutItemProps = {
  cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
});

export default CheckoutItem;