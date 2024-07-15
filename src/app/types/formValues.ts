import { Values } from 'app/constants/options';
import { InputType } from './inputType';

export type FormValues = {
  type: Values;
  options: string[];
  inputType: InputType;
  isRequired: boolean;
  label: string;
  name: string;
  text: string;
  placeholder: string;
  buttonText: string;
};
