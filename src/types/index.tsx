export interface IState {
  user: null | string;
  todo: [] | ITask;
}

export interface ITask {
  id: string;
  title: string;
  isActive: boolean;
  classname: string;
}
