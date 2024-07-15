/* eslint-disable react/require-default-props */
import { Select } from 'antd';
import { generalStyles } from 'app/constants/generalStyles';

type SelectProps = {
  options?: string[];
};

const getSelectOptions = (options: string[]) => options.map((option) => ({
  value: option,
  label: option,
}));

export const SelectComponent = ({ options }: SelectProps) => (
  <Select
    options={getSelectOptions(options ?? [])}
    style={generalStyles}
  />
);
