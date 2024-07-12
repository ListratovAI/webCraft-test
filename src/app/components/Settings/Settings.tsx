import { useState } from 'react';
import { Button } from 'antd';

import { Options, Values } from 'app/constants/options';
import { SelectStyled } from './Settings.styled';

type SettingsProps = {
  onAddElement: (value: Values) => void;
};

export const Settings = (
  { onAddElement }: SettingsProps,
) => {
  const [selectedType, setSelectedType] = useState<Values>(Values.INPUT);
  const handleOnAddElement = () => {
    onAddElement(selectedType);
  };

  return (
    <div>
      <SelectStyled value={selectedType} options={Options} onChange={setSelectedType} />
      <Button onClick={handleOnAddElement}>Добавить элемент</Button>
    </div>
  );
};
