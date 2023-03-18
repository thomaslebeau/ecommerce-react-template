import ProductCard from '../product-card/product-card.component';
import { ProductListContainer } from './product-list.style';

const MOCK_DATA = [
  {
    id: 0,
    title: 'product 1',
    price: 99.0,
    imgUrl: 'https://placehold.co/200x100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo omnis error',
  },
  {
    id: 1,
    title: 'product 2',
    price: 99.0,
    imgUrl: 'https://placehold.co/200x100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo omnis error',
  },
  {
    id: 2,
    title: 'product 3',
    price: 99.0,
    imgUrl: 'https://placehold.co/200x100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo omnis error',
  },
  {
    id: 3,
    title: 'product 4',
    price: 99.0,
    imgUrl: 'https://placehold.co/200x100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo omnis error',
  },
  {
    id: 4,
    title: 'product 5',
    price: 99.0,
    imgUrl: 'https://placehold.co/200x100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo omnis error',
  },
  {
    id: 5,
    title: 'product 6',
    price: 99.0,
    imgUrl: 'https://placehold.co/200x100',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo omnis error',
  },
];

const ProductList = () => {
  return (
    <ProductListContainer>
      {MOCK_DATA.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
