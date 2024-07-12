import { Values } from 'app/constants/options';

export type FormValues = {
  type: Values;
  isRequired: boolean;
  label: string;
  name: string;
  text: string;
  placeholder: string;
  buttonText: string;
};
