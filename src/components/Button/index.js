import React from 'react';
import style from './Button.module.css';

export default function Button({ text, type, disabled, onClick }) {
  return (
    <button
      className={style.btn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
