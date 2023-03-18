import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #eee;
  padding: 1rem 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 0 2rem;
  color: #333;
  font-weight: 500;
  text-decoration: none;
  svg {
    position: relative;
    top: -3px;
    right: 4px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  max-width: 22rem;
`;
