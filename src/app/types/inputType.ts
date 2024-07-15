export enum InputType {
  TEXT = 'text',
  EMAIL = 'email',
  PHONE = 'phone',
  NUMBER = 'number',
}

export const InputTypeOptions = [
  { value: InputType.TEXT, label: 'Текст' },
  { value: InputType.EMAIL, label: 'e-mail' },
  { value: InputType.PHONE, label: 'Номер телефона' },
  { value: InputType.NUMBER, label: 'Число' },
];
