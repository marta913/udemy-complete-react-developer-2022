import { FC } from 'react';

import { CartItemContainer, ItemDetails } from './cart-item.styles';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={``} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x 
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;