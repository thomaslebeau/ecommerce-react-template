import { useNavigate } from 'react-router-dom';

import { CategoryPreviewContainer } from './category-preview.style';

const CategoryPreview = ({ id, title, imageUrl, link }) => {
  const navigate = useNavigate();
  const goToCategory = () => navigate(link);
  return (
    <CategoryPreviewContainer
      onClick={goToCategory}
      key={id}
      imageUrl={imageUrl}
    >
      <h2>{title}</h2>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
