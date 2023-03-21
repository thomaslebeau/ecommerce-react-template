import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  ProductCardContainer,
  TitleProductCard,
  ProductCardDescription,
  ProductCardButton,
} from './product-card.style';

const ProductCard = ({ id, title, price, description, imgUrl }) => {
  return (
    <ProductCardContainer key={id}>
      <img src={imgUrl} />
      <TitleProductCard level={2} size={2}>
        {title}
        <span>{price}</span>
      </TitleProductCard>
      <ProductCardDescription>{description}</ProductCardDescription>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        buttonSize={'small'}
        type="button"
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
