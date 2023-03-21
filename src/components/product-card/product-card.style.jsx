import styled from 'styled-components';
import Button from '../button/button.component';
import Title from '../title/title.component';

export const ProductCardContainer = styled.div``;

export const ProductCardDescription = styled.div`
  margin-bottom 1.6rem;
  font-size: 1.4rem;
`;

export const TitleProductCard = styled(Title)`
  display: flex;
  justify-content: space-between;
  margin: 1.3rem 0;
`;

export const ProductCardButton = styled(Button)`
  padding: 1.2rem 3rem;
`;
