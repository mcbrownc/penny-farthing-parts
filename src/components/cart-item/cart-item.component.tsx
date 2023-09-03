import { FC, memo } from 'react';

import { CartItem as TCartItem} from '../../store/cart/cart.types';

import { CartItemContainer, ItemDetails } from './cart-item.styles';

type CartItemProps = {
  cartItem: TCartItem
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} X ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
});

export default CartItem;