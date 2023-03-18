import { Routes, Route } from 'react-router-dom';

import Categories from './routes/categories/categories.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="categories/*" element={<Categories />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
