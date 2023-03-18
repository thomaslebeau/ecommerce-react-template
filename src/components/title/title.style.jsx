import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: 500;
  line-height: ${({ size }) => `${size * 1.2}rem`};
`;
