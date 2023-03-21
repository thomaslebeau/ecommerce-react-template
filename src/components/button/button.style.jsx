import styled from 'styled-components';

export const BaseButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 3rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  padding: ${(props) => props.size * 1.5}rem ${(props) => props.size * 4}rem;
  border: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  font-weight: 500;
  &:hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const InvertedButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
