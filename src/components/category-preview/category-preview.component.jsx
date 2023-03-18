import { useNavigate } from 'react-router-dom';
// import {
//   DirectoryContainer,
//   DirectoryBg,
//   DirectoryBody,
// } from "./directory-item.styles";

import { CategoryPreviewContainer } from './category-preview.style';

const CategoryPreview = ({ id, title, imageUrl, link }) => {
  const navigate = useNavigate();
  const goToDirectory = () => navigate(link);
  return (
    <CategoryPreviewContainer
      onClick={goToDirectory}
      key={id}
      imageUrl={imageUrl}
    >
      <h2>{title}</h2>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
