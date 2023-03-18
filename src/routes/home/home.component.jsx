import { Outlet } from 'react-router-dom';
import CategoriesList from '../categories-list/categories-list';
import Title from '../../components/title/title.component';
import { HomeWrapper } from './home.style';

const Home = () => {
  return (
    <HomeWrapper>
      <Title size={2.2}>Shop Our Top Categories</Title>
      <CategoriesList />
      <Outlet />
    </HomeWrapper>
  );
};

export default Home;
