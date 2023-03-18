import styled from 'styled-components';
import Title from '../../components/title/title.component';

export const AdvertiseContainer = styled.div`
  position: relative;
  background: no-repeat center/cover
    ${({ backgroundImg }) => `url(${backgroundImg})`};
  min-height: 55rem;
`;

export const AdvertiseContentContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 18rem 50% 0 0;
  p {
    margin-bottom: 2rem;
  }
`;

export const TitleAd = styled(Title)`
  font-weight: 600;
  padding-bottom: 3rem;
`;
