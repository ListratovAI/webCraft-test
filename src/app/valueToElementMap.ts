import { Values } from './constants/options';
import { ButtonComponent } from './elements/button/Button';
import { CheckboxComponent } from './elements/checkbox/Checkbox';
import { InputComponent } from './elements/Input/Input';
import { SelectComponent } from './elements/select/Select';
import { FormValues } from './types/formValues';

type ValueToElementMapParams = Partial<FormValues>;

export const valueToElementMap = ({
  buttonText, placeholder, name, options, inputType,
}: ValueToElementMapParams) => ({
  [Values.CHECKBOX]: CheckboxComponent,
  [Values.INPUT]: InputComponent({
    name, placeholder, inputType,
  }),
  [Values.SUBMIT_BUTTON]: ButtonComponent(buttonText || ''),
  [Values.SELECT]: SelectComponent({ options }),
});
