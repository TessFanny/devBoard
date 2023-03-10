import { ColumnType } from './enums';

export const TaskModel = {
  id: '',
  title: '',
  column: ColumnType.TO_DO,
  color: '',
};

export const DragItem = {
  index: 0,
  id: '',
  from: ColumnType.TO_DO,
};
