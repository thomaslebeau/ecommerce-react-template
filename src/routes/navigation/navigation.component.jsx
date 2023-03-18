import { Outlet, useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  NavContainer,
  NavLink,
  Logo,
} from './navigation.style';
import LogoSrc from '../../assets/logo-shopcart.png';
import { Cart, Person } from '@styled-icons/ionicons-outline';

const Navigation = () => {
  const navigate = useNavigate();
  const goTohome = () => navigate('/');
  return (
    <>
      <HeaderContainer>
        <Logo src={LogoSrc} onClick={goTohome} />
        <NavContainer>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink>Deals</NavLink>
          <NavLink>What's New</NavLink>
          <NavLink>Delivery</NavLink>
        </NavContainer>
        <NavContainer>
          <NavLink>
            <Person size={23} />
            Account
          </NavLink>
          <NavLink>
            <Cart size={25} />
            Cart
          </NavLink>
        </NavContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
