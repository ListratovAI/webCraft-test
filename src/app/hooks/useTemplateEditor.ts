import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import saveAs from 'file-saver';

import { ElementsList } from '../types/elementsList';
import { valueToElementMap } from '../valueToElementMap';
import { FormValues } from '../types/formValues';

export const useTemplateEditor = () => {
  const [elements, setElements] = useState<ElementsList[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ref = useRef<HTMLDivElement>(null);

  const addElementToPage = ({
    type, isRequired, label, name, ...values
  }: FormValues) => {
    const id = uuidv4();
    setElements((prevElements) => ([
      ...prevElements,
      {
        content: valueToElementMap(
          values,
        )[type],
        id,
        isRequired,
        label,
        name,
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

  return {
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
  };
};
