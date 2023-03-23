import React from 'react';
import FormErrors from '../FormErrors';
import style from './Input.module.css';

const Input = ({ name, labelText, handleChange, error, ...inputProps }) => {
  return (
    <div className={style.row}>
      <label htmlFor={name} className={style.label}>
        {labelText || name}
      </label>
      <input
        id={name}
        name={name}
        onChange={handleChange}
        className={style.input}
        {...inputProps}
      />
      <FormErrors formErrors={error} />
    </div>
  );
};

export default Input;
