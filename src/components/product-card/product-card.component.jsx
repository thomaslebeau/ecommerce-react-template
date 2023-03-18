import Button from '../button/button.component';
import Title from '../title/title.component';
import { ProductCardContainer } from './product-card.style';

const ProductCard = ({ id, title, price, description, imgUrl }) => {
  return (
    <ProductCardContainer key={id}>
      <img src={imgUrl} />
      <Title level={2} size={2}>
        {title}
        <span>{price}</span>
      </Title>
      <p>{description}</p>
      <Button>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
