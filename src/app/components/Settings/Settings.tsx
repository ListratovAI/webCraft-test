import { useState } from 'react';

import { Options, Values } from 'app/constants/options';
import { Checkbox, Form, Input } from 'antd';
import { FormValues } from 'app/types/formValues';
import { InputType } from 'app/types/inputType';
import {
  ButtonStyled, FormItemStyled, SelectStyled,
} from './Settings.styled';
import { SelectSettings } from './SelectSettings/SelectSettings';
import { InputSettings } from './InputSettings/InputSettings';

type SettingsProps = {
  onAddElement: (value: FormValues) => void;
};

export const Settings = (
  { onAddElement }: SettingsProps,
) => {
  const [form] = Form.useForm();
  const [selectedType, setSelectedType] = useState<Values>(Values.INPUT);
  const [options, setOptions] = useState<string[]>([]);
  const [inputType, setInputType] = useState<InputType>(InputType.TEXT);

  const handleOnAddElement = (values: FormValues) => {
    onAddElement({ ...values, options, inputType });
    form.resetFields();
  };

  const isSubmitButton = selectedType === Values.SUBMIT_BUTTON;
  const isGeneralSettings = !isSubmitButton;
  const isInput = selectedType === Values.INPUT;
  const isSelect = selectedType === Values.SELECT;

  return (
    <Form onFinish={handleOnAddElement} form={form}>
      <FormItemStyled name="type" initialValue={selectedType}>
        <SelectStyled options={Options} onChange={setSelectedType} />
      </FormItemStyled>
      {isInput && (
      <InputSettings inputType={inputType} setInputType={setInputType} />
      )}
      {isGeneralSettings && (
      <>
        <FormItemStyled name="name" rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}>
          <Input placeholder="Введите имя" />
        </FormItemStyled>
        <FormItemStyled name="label" rules={[{ required: true, message: 'Пожалуйста, введите лейбл!' }]}>
          <Input placeholder="Введите лейбл" />
        </FormItemStyled>
        <FormItemStyled name="isRequired" valuePropName="checked">
          <Checkbox>Обязательное поле</Checkbox>
        </FormItemStyled>
      </>
      )}
      {isSelect && (
        <SelectSettings options={options} setOptions={setOptions} />
      )}
      {isSubmitButton && (
      <FormItemStyled name="buttonText" rules={[{ required: true, message: 'Пожалуйста, введите текст на кнопке!' }]}>
        <Input placeholder="Введите текст на кнопке" />
      </FormItemStyled>
      )}
      <Form.Item>
        <ButtonStyled
          type="primary"
          htmlType="submit"
        >
          Добавить элемент
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
};
