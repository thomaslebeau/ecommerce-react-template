import { Outlet } from 'react-router-dom';
import CategoriesList from '../categories-list/categories-list';
import Title from '../../components/title/title.component';
import { HomeWrapper } from './home.style';
import Advertise from '../../components/advertise/advertise.component';

const Home = () => {
  return (
    <>
      <Advertise></Advertise>
      <HomeWrapper>
        <Title level={2} size={2.2}>
          Shop Our Top Categories
        </Title>
        <CategoriesList />
        <Outlet />
      </HomeWrapper>
    </>
  );
};

export default Home;
