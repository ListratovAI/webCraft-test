import { forwardRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TemplateStyled } from './Template.styled';

type TemplateProps = {
  elements: React.ReactElement[]
};

export const Template = forwardRef<HTMLDivElement, TemplateProps>((
  { elements },
  ref,
) => (
  <DndProvider backend={HTML5Backend}>
    <TemplateStyled
      ref={ref}
    >
      {elements?.map((element) => <div key={element.key}>{element}</div>)}
    </TemplateStyled>
  </DndProvider>
));
