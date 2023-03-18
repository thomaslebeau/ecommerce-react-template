// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import ProductPreview from '../product-preview/product-preview.component';
// import ProductList from '../category-preview/category-preview.component';
// import { fetchCategoriesStart } from "../../store/categories/category.actions";
// import CategoriesPreview from "../categories-preview/categories-preview.component";
// import Category from "../category/category.component";

const Categories = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchCategoriesStart());
  //   }, []);

  return (
    <Routes>
      <Route path=":product" element={<ProductPreview />}></Route>
    </Routes>
  );
};

export default Categories;
