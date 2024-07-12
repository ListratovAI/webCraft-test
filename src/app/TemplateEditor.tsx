import { useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import {

  Typography, Col, Row,
  Button,
} from 'antd';

import { Template } from 'app/components/Template/Template';
import { Settings } from 'app/components/Settings/Settings';
import { FooterStyled, TemplateStyled } from './TemplateEditor.styled';
import { Values } from './constants/options';
import { valueToElementMap } from './valueToElementMap';

const { Title } = Typography;

const TemplateEditor = () => {
  const [elements, setElements] = useState<React.ReactElement[]>([]);

  const ref = useRef<HTMLDivElement>(null);

  const addElementToPage = (elementType: Values) => {
    setElements((prevElements) => ([
      ...prevElements,
      valueToElementMap({ text: 'кнопка', placeholder: 'плейсхолдер' })[elementType],
    ]));
  };

  const handleOnSaveHTML = () => {
    const text = ref?.current?.outerHTML || '';
    const blob = new Blob([text], { type: 'text/plain' });
    saveAs(blob, 'template.html');
  };

  return (
    <TemplateStyled>
      <Title>Редактор html форм</Title>
      <Row>
        <Col span={12}>
          <Template ref={ref} elements={elements} />
        </Col>
        <Col span={12}>
          <Settings
            onAddElement={addElementToPage}
          />
        </Col>
      </Row>
      <FooterStyled>
        <Button onClick={handleOnSaveHTML}>Экспорт формы</Button>
      </FooterStyled>
    </TemplateStyled>
  );
};

export default TemplateEditor;
