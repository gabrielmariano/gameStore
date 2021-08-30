import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Title } from './styles';
import { useCart } from '../../hooks/useCart';
import cartIco from '../../assets/images/cart-icon.svg'

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;
  ;

  return (
    <Container>
      <Link to="/">
        <Title>GameStore</Title>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <img src={cartIco} alt="cart" width="30%"/>
      </Cart>
    </Container>
  );
};

export default Header;
