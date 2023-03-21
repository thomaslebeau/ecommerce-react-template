import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { COLORS } from './App.style';

import Categories from './routes/categories/categories.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
  const theme = {
    colors: COLORS,
  };
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="categories/*" element={<Categories />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
