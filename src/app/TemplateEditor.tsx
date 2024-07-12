import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';
import {
  Col, Row,
  Button,
  Modal,
} from 'antd';

import { Template } from 'app/components/Template/Template';
import { Settings } from 'app/components/Settings/Settings';
import { FooterStyled, TemplateStyled, TitleStyled } from './TemplateEditor.styled';
import { valueToElementMap } from './valueToElementMap';
import { ElementsList } from './types/elementsList';
import { Actions } from './components/Actions/Actions';
import { FormValues } from './types/formValues';

const TemplateEditor = () => {
  const [elements, setElements] = useState<ElementsList[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ref = useRef<HTMLDivElement>(null);

  const addElementToPage = ({
    type, ...values
  }: FormValues) => {
    const id = uuidv4();
    setElements((prevElements) => ([
      ...prevElements,
      {
        content: valueToElementMap(
          values,
        )[type],
        id,
      },
    ]));
    setIsModalOpen(false);
  };

  const removeElementFromPage = (elementId: string) => {
    setElements((prevElements) => prevElements.filter((el) => el.id !== elementId));
    setIsDeleteMode(false);
  };

  const handleOnSaveHTML = () => {
    const text = ref?.current?.outerHTML || '';
    const blob = new Blob([text], { type: 'text/plain' });
    saveAs(blob, 'template.html');
  };

  const isEditDisabled = !elements.length;

  return (
    <TemplateStyled>
      <TitleStyled>Редактор html форм</TitleStyled>
      <Actions
        isDeleteMode={isDeleteMode}
        isEditMode={isEditMode}
        isEditDisabled={isEditDisabled}
        setIsDeleteMode={setIsDeleteMode}
        setIsEditMode={setIsEditMode}
        showModal={showModal}
      />
      <Row>
        <Col span={24}>
          <Template
            ref={ref}
            elements={elements}
            removeElementFromPage={removeElementFromPage}
            isEditMode={isEditMode}
            isDeleteMode={isDeleteMode}
          />
        </Col>
      </Row>
      <FooterStyled>
        <Button onClick={handleOnSaveHTML}>Экспорт формы</Button>
      </FooterStyled>
      <Modal title="Добавление элемента" open={isModalOpen} onCancel={closeModal} footer="">
        <Settings
          onAddElement={addElementToPage}
        />
      </Modal>
    </TemplateStyled>
  );
};

export default TemplateEditor;
