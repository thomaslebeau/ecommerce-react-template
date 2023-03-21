import { Routes, Route } from 'react-router-dom';
import ProductPreview from '../product-preview/product-preview.component';

const Categories = () => {
  return (
    <Routes>
      <Route path=":product" element={<ProductPreview />}></Route>
    </Routes>
  );
};

export default Categories;
