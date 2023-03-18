import { StyledHeading } from './title.style';

const Title = ({ level, ...rest }) => {
  return <StyledHeading as={`h${level}`} {...rest} />;
};

Title.defaultProps = {
  level: 1,
};

export default Title;
