import { useParams } from 'react-router-dom';
import ProductList from '../../components/product-list/product-list.component';
import { ProductPreviewContainer, TitlePreview } from './product-preview.style';

const ProductPreview = () => {
  const { product } = useParams();
  return (
    <ProductPreviewContainer>
      <TitlePreview size={3}>{product}</TitlePreview>
      <ProductList />
    </ProductPreviewContainer>
  );
};

export default ProductPreview;
