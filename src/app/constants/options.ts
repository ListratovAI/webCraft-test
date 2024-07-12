export enum Values {
  INPUT = 'input',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  SUBMIT_BUTTON = 'submitButton',
}

export const Options = [
  { value: Values.INPUT, label: 'Текстовое поле' },
  { value: Values.SELECT, label: 'Список' },
  { value: Values.CHECKBOX, label: 'Чекбокс' },
  { value: Values.SUBMIT_BUTTON, label: 'Кнопка подтверждения' },
];
