import { useState } from 'react';
import {
  Col, Row,
  Button,
  Modal,
} from 'antd';

import { Template } from 'app/components/Template/Template';
import { Settings } from 'app/components/Settings/Settings';
import { FooterStyled, TemplateStyled, TitleStyled } from './TemplateEditor.styled';
import { Actions } from './components/Actions/Actions';
import { useTemplateEditor } from './hooks/useTemplateEditor';

const TemplateEditor = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const {
    isDeleteMode,
    isModalOpen,
    showModal,
    closeModal,
    isEditDisabled,
    addElementToPage,
    removeElementFromPage,
    handleOnSaveHTML,
    setIsDeleteMode,
    ref,
    elements,
  } = useTemplateEditor();

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
