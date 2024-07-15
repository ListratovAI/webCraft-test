/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { forwardRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ElementsList } from 'app/types/elementsList';

import { Form } from 'antd';
import { TemplateStyled } from './Template.styled';

type TemplateProps = {
  elements: ElementsList[];
  removeElementFromPage: (elementId: string) => void;
  isEditMode: boolean;
  isDeleteMode: boolean;
};

export const Template = forwardRef<HTMLDivElement, TemplateProps>((
  {
    elements, removeElementFromPage, isEditMode, isDeleteMode,
  },
  ref,
) => {
  console.log('isEditMode', isEditMode);

  const handeOnClick = (id: string) => {
    if (isDeleteMode) {
      removeElementFromPage(id);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <TemplateStyled
        ref={ref}
      >
        <Form>
          {elements?.map((element) => (
            <div
              key={element.id}
              onClick={() => handeOnClick(element.id)}
            >
              <Form.Item name={element.name} label={element.label} required={element.isRequired}>
                {element.content}
              </Form.Item>
            </div>
          ))}
        </Form>
      </TemplateStyled>
    </DndProvider>
  );
});
