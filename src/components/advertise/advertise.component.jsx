import ad from '../../assets/ad.png';
import Button from '../button/button.component';
import {
  AdvertiseContainer,
  AdvertiseContentContainer,
  TitleAd,
} from './advertise.style';

const Advertise = () => {
  return (
    <AdvertiseContainer backgroundImg={ad}>
      <AdvertiseContentContainer>
        <TitleAd level={2} size={4}>
          Shopping And <br />
          Departement Store.
        </TitleAd>
        <p>
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <Button>Learn More</Button>
      </AdvertiseContentContainer>
    </AdvertiseContainer>
  );
};

export default Advertise;
