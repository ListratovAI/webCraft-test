/* eslint-disable react/require-default-props */
import { Input } from 'antd';
import { generalStyles } from 'app/constants/generalStyles';
import { InputType } from 'app/types/inputType';

type InputComponentProps = {
  name?: string;
  placeholder?: string;
  inputType?: InputType;
};

export const InputComponent = ({
  name, placeholder, inputType,
}: InputComponentProps) => (
  <Input
    name={name}
    type={inputType}
    placeholder={placeholder}
    style={generalStyles}
  />
);
