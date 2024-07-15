import { Input, Select } from 'antd';
import { InputType, InputTypeOptions } from 'app/types/inputType';
import { FormItemStyled } from '../Settings.styled';

type InputSettingsProps = {
  inputType: InputType;
  setInputType: React.Dispatch<React.SetStateAction<InputType>>
};

export const InputSettings = ({ inputType, setInputType }: InputSettingsProps) => (
  <>
    <FormItemStyled name="placeholder" rules={[{ required: true, message: 'Пожалуйста, введите placeholder!' }]}>
      <Input placeholder="Введите placeholder" />
    </FormItemStyled>
    <Select options={InputTypeOptions} onChange={setInputType} value={inputType} />
  </>
);
