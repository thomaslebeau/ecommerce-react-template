import { TitleStyled } from './title.style';

const Title = ({ children: text, size, className }) => {
  return (
    <TitleStyled className={className} size={size}>
      {text}
    </TitleStyled>
  );
};

export default Title;
