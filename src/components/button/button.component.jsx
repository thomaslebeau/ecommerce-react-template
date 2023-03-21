import { BaseButton, InvertedButton } from './button.style';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted',
};

export const BUTTON_SIZE = {
  small: 0.6,
  medium: 1,
  large: 1.2,
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({
  children,
  buttonType,
  buttonSize = 'medium',
  ...othersProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton size={[BUTTON_SIZE[buttonSize]]} {...othersProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
