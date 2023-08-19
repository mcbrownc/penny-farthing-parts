import { Outlet } from "react-router-dom"; 
import { Fragment } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { ReactComponent as ChainringLogo } from "../../assets/chainring.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { LogoContainer, NavbarContainer, NavLink, NavLinks } from './navbar.styles'; 

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen); 

  return (
    <Fragment>
      <NavbarContainer>
        <LogoContainer to='/'>
          <ChainringLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )}   
            <CartIcon />   
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  )
};

export default NavBar;