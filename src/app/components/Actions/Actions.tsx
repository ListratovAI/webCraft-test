import { TemplateStatusStyled } from 'app/TemplateEditor.styled';
import { ActionsStyled, ButtonStyled } from './Actions.styled';

type ActionsProps = {
  isDeleteMode: boolean;
  isEditMode: boolean;
  isEditDisabled: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: () => void;
};

export const Actions = ({
  isDeleteMode, isEditMode, isEditDisabled, setIsEditMode, setIsDeleteMode, showModal,
}: ActionsProps) => {
  const getTemplateStatusText = () => {
    if (isDeleteMode) {
      return 'Выберите элемент для удаления';
    } if (isEditMode) {
      return 'Выберите элемент для редактирования';
    }
    return '';
  };

  const handeSwitchEditMode = () => setIsEditMode((prevState) => !prevState);
  const handeSwitchDeleteMode = () => setIsDeleteMode((prevState) => !prevState);

  return (
    <>
      <ActionsStyled>
        <ButtonStyled
          disabled={isDeleteMode || isEditMode}
          onClick={showModal}
        >
          Добавить элемент
        </ButtonStyled>
        <ButtonStyled
          disabled={isEditDisabled || isDeleteMode}
          onClick={handeSwitchEditMode}
        >
          {isEditMode ? 'Отменить редактирование' : 'Редактировать элемент'}
        </ButtonStyled>
        <ButtonStyled
          disabled={isEditDisabled || isEditMode}
          onClick={handeSwitchDeleteMode}
        >
          {isDeleteMode ? 'Отменить удаление' : 'Удалить элемент'}
        </ButtonStyled>
      </ActionsStyled>
      <TemplateStatusStyled level={4}>
        {getTemplateStatusText()}
      </TemplateStatusStyled>
    </>
  );
};
