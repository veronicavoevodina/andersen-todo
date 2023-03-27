import React from 'react';
import style from './List.module.css';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const List = ({ removeItem, editItem, moveToDone, isEditing }) => {
  const { todo } = useSelector((state) => state.todo);
  return (
    <div className={style.list}>
      {todo
        .filter((el) => el.isActive)
        .map((item) => {
          const { id, title, classname } = item;
          return (
            <article className={style.item} key={id}>
              <p
                className={style[classname]}
                onClick={() => {
                  moveToDone(id);
                }}
              >
                {title}
              </p>
              <div className={style.btns}>
                <button
                  type="button"
                  className={style.edit}
                  onClick={() => editItem(id)}
                >
                  <CiEdit />
                </button>
                <button
                  type="button"
                  className={style.delete}
                  onClick={() => removeItem(id)}
                  disabled={isEditing}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default List;
