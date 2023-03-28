import React, { ChangeEvent } from 'react';
import FormErrors from '../FormErrors';
import style from './Input.module.css';

const Input = ({
  name,
  labelText,
  onChange,
  error,
  ...inputProps
}: {
  name: string;
  labelText: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  placeholder: string;
  maxLength?: number;
}) => {
  return (
    <div className={style.row}>
      <label htmlFor={name} className={style.label}>
        {labelText || name}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        onChange={onChange}
        className={style.input}
        {...inputProps}
      />
      <FormErrors formErrors={error} />
    </div>
  );
};

export default Input;
