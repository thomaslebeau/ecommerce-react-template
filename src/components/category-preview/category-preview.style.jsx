import styled from 'styled-components';

export const DirectoryBody = styled.div``;

export const CategoryPreviewContainer = styled.div`
  background: no-repeat center/cover ${({ imageUrl }) => `url(${imageUrl})`};
  min-height: 30rem;
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  cursor: pointer;
  h2 {
    color: #fff;
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
  }
`;
