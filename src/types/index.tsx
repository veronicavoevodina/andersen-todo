export interface IUserState {
  user: null | string;
}

export interface ITodoState {
  todo: [] | ITask[];
}

export interface ITask {
  id: string;
  title: string;
  isActive: boolean;
  classname: string;
}

export type DeclareFunc = (id: string) => void;
