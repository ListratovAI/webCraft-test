import {
  Button, Input, List,
} from 'antd';
import { useState } from 'react';

type SelectSettingsProps = {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SelectSettings = ({ options, setOptions }: SelectSettingsProps) => {
  const [value, setValue] = useState('');

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (input) => {
    setValue(input.target.value);
  };

  const handleOnClick = () => {
    setOptions((prevState) => [
      ...prevState,
      value,
    ]);
    setValue('');
  };

  return (
    <>
      {!!options.length && (
      <div>
        Выбранные опции:
        <List>
          {options.map((option) => <List.Item key={option}>{option}</List.Item>)}
        </List>
      </div>
      )}
      Введите опции:
      <Input value={value} onChange={handleOnChange} />
      <Button onClick={handleOnClick} type="primary">Добавить</Button>
    </>
  );
};
