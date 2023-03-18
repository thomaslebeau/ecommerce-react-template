import { TitleStyled } from './title.style';

const Title = ({ children: text, size }) => {
  return <TitleStyled size={size}>{text}</TitleStyled>;
};

export default Title;
