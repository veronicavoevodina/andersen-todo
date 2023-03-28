import React, { MouseEventHandler } from 'react';
import style from './Button.module.css';

export default function Button({
  text,
  type,
  disabled,
  onClick,
}: {
  text: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
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
