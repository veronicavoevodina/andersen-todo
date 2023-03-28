import todoReducer, {
  updateTodo,
  addToList,
  removeFromList,
} from '../todoSlice';
import { initialState } from '../todoSlice';

describe('slice', () => {
  it('return default', () => {
    const result = todoReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });
  it('add item', () => {
    const action = {
      type: addToList.type,
      payload: {
        title: 'name',
        id: new Date().getTime(),
        isActive: true,
        classname: 'title',
      },
    };
    const result = todoReducer({ todo: [] }, action);
    expect(result.todo[0].title).toEqual('name');
  });
  it('update item', () => {
    const todoList = [
      {
        title: 'name',
        id: '717',
        isActive: true,
        classname: 'title',
      },
    ];
    const action = {
      type: updateTodo.type,
      payload: {
        title: 'newName',
        id: '717',
        isActive: true,
        classname: 'title',
      },
    };
    const result = todoReducer({ todo: todoList }, action);
    expect(result.todo[0].title).toEqual('newName');
  });
  it('delete item', () => {
    const todoList = [
      {
        title: 'name',
        id: '717',
        isActive: true,
        classname: 'title',
      },
    ];
    const action = {
      type: removeFromList.type,
      payload: '717',
    };
    const result = todoReducer({ todo: todoList }, action);
    expect(result.todo).toEqual([]);
  });
});
