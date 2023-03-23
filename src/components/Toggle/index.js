import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Toggle.module.css';

const Toggle = () => {
  return (
    <div className={style.container}>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.toggle)}
        to="/"
      >
        <div className={style.left}>Todo</div>
      </NavLink>

      <NavLink
        to="done"
        className={({ isActive }) => (isActive ? style.active : style.toggle)}
      >
        <div className={style.right}>Done</div>
      </NavLink>
    </div>
  );
};

export default Toggle;
