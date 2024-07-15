import { Button } from 'antd';
import { generalStyles } from 'app/constants/generalStyles';
import { useDrag } from 'react-dnd';

export const ItemTypes = {
  BOX: 'box',
};

export interface BoxProps {
  name: string
}

interface DropResult {
  name: string
}

type ButtonReactComponentProps = {
  text: string;
};

const ButtonReactComponent = ({ text }: ButtonReactComponentProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name: 'test' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (<Button ref={drag} style={{ ...generalStyles, opacity }} type="primary" htmlType="submit">{text}</Button>);
};

export const ButtonComponent = (text: string) => <ButtonReactComponent text={text} />;
