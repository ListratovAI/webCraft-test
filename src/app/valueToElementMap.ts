import { Values } from './constants/options';
import { ButtonComponent } from './elements/button/Button';
import { CheckboxComponent } from './elements/checkbox/Checkbox';
import { InputComponent } from './elements/Input/Input';
import { SelectComponent } from './elements/select/Select';

type ValueToElementMapProps = {
  text?: string;
  placeholder?: string;
};

export const valueToElementMap = ({ text, placeholder }: ValueToElementMapProps) => ({
  [Values.CHECKBOX]: CheckboxComponent,
  [Values.INPUT]: InputComponent(placeholder || ''),
  [Values.SUBMIT_BUTTON]: ButtonComponent(text || ''),
  [Values.SELECT]: SelectComponent,
});
