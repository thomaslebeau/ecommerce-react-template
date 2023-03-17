import { Outlet, useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  NavContainer,
  NavLink,
  Logo,
} from './navigation.style';
import LogoSrc from '../../assets/logo-shopcart.png';

const Navigation = () => {
  const navigate = useNavigate();
  const goTohome = () => navigate('/');
  return (
    <>
      <HeaderContainer>
        <Logo src={LogoSrc} onClick={goTohome} />
        <NavContainer>
          <NavLink>Categories</NavLink>
          <NavLink>Deals</NavLink>
          <NavLink>What's New</NavLink>
          <NavLink>Delivery</NavLink>
        </NavContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
