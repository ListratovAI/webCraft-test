import { Input } from 'antd';
import { generalStyles } from 'app/constants/generalStyles';

export const InputComponent = (placeholder: string) => (
  <Input placeholder={placeholder} style={generalStyles} />
);
