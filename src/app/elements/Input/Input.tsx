/* eslint-disable react/require-default-props */
import { Input } from 'antd';
import { generalStyles } from 'app/constants/generalStyles';

type InputComponentProps = {
  name?: string;
  placeholder?: string;
  label?: string;
};

export const InputComponent = ({ name, placeholder, label }: InputComponentProps) => (
  <Input name={name} aria-label={label} placeholder={placeholder} style={generalStyles} />
);
