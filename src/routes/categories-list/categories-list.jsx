import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesListContainer } from './categories-list.style';

const CategoriesList = () => {
  const categories = [
    {
      id: 1,
      title: 'Furniture',
      imageUrl:
        'https://images.unsplash.com/photo-1620003039413-b519b3c12e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
      link: '/categories/furniture',
    },
    {
      id: 2,
      title: 'Hand bag',
      imageUrl:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTgwfDB8MXxzZWFyY2h8MjR8fGhhbmQlMjBiYWd8ZW58MHx8fHwxNjc5MTUzMzQ4&ixlib=rb-4.0.3&q=80&w=400',
      link: '/categories/hand-bag',
    },
    {
      id: 3,
      title: 'Books',
      imageUrl:
        'https://images.unsplash.com/photo-1550399105-05c4a7641b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTgwfDB8MXxzZWFyY2h8NDJ8fGJvb2tzfGVufDB8fHx8MTY3OTE0NjAwNw&ixlib=rb-4.0.3&q=80&w=400',
      link: '/categories/books',
    },
    {
      id: 4,
      title: 'Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTgwfDB8MXxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fHx8MTY3OTE0MDEwNA&ixlib=rb-4.0.3&q=80&w=400',
      link: '/categories/tech',
    },
    {
      id: 5,
      title: 'Sneakers',
      imageUrl:
        'https://pixabay.com/get/g05b18e139c87c36ac49f52e936926ad3ac578cd97880e4a0dce10062e24987988b629c9a3b9dafd597fb7e525aec855e_640.jpg',
      link: '/categories/sneakers',
    },
    {
      id: 6,
      title: 'Travel',
      imageUrl:
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTgwfDB8MXxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHx8fDE2NzkwODA5NDY&ixlib=rb-4.0.3&q=80&w=400',
      link: '/categories/travel',
    },
  ];
  return (
    <CategoriesListContainer>
      {categories.map((item) => (
        <CategoryPreview {...item} key={item.id} />
      ))}
    </CategoriesListContainer>
  );
};

export default CategoriesList;
