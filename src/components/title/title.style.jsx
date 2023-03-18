import styled from 'styled-components';

export const TitleStyled = styled.div`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: 500;
  line-height: ${({ size }) => `${size * 1.2}rem`};
`;
