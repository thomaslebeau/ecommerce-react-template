// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import CategoriesList from '../categories-list/categories-list';
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
      {/* <Route index element={<CategoriesList />} /> */}
      {/* <Route path=":product" element={<ProductList />}></Route> */}
    </Routes>
  );
};

export default Categories;
