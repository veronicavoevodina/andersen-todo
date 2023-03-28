import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/store';
import Input from '../../components/Input';
import style from './Todo.module.css';
import List from '../../components/List';
import { updateTodo, addToList, removeFromList } from '../../store/todoSlice';
import { useState } from 'react';
import Button from '../../components/Button';

const Todo = () => {
  const dispatch = useDispatch();
  const { todo } = useAppSelector((state) => state.rootReducer.todoReducer);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      setError('please enter value');
    } else if (name && isEditing) {
      const newItem = {
        title: name,
        id: editID,
        isActive: todo.find((el) => el.id === editID).isActive,
        classname: 'title',
      };
      dispatch(updateTodo(newItem));
      setName('');
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        isActive: true,
        classname: 'title',
      };

      dispatch(addToList(newItem));
      setName('');
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      setError('please enter value');
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
    setName(value);
  };
  const removeItem = (id: string) => {
    dispatch(removeFromList(id));
  };
  const editItem = (id: string) => {
    const item = todo.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(item.title);
  };
  const DoneIt = (id: string) => {
    dispatch(
      updateTodo({ ...todo.find((item) => item.id === id), classname: 'done' }),
    );
    setTimeout(() => {
      dispatch(
        updateTodo({ ...todo.find((item) => item.id === id), isActive: false }),
      );
    }, 2000);
  };
  return (
    <section className={style.section}>
      <form className={style.input} onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={name}
          name="task"
          id="task"
          labelText="Enter your task"
          placeholder="Buy products"
          error={error}
        />
        <Button
          type="submit"
          disabled={disabled}
          text={isEditing ? 'edit' : 'submit'}
        />
      </form>
      {todo.length > 0 && (
        <div className={style.list}>
          <List
            removeItem={removeItem}
            editItem={editItem}
            moveToDone={DoneIt}
            isEditing={isEditing}
          />
        </div>
      )}
    </section>
  );
};

export default Todo;
