import React from 'react';
import logo from '../../assets/images/logo.png';
import style from './Navbar.module.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { user, todo } = useSelector((store) => store.todo);
  const count = () => {
    const num = todo.filter((el) => el.isActive).length;
    let answer = `${num} active tasks`;
    switch (num) {
      case 0:
        answer = 'no active tasks';
        break;
      case 1:
        answer = '1 active task';
        break;
      default:
        return answer;
    }
    return answer;
  };

  return (
    <nav>
      <div className={style.center}>
        <div className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          {user && (
            <p>
              <span className={style.item}>Hello, {user}</span>
              <span className={style.counter}>{count()}</span>
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}
