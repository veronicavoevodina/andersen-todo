import React from 'react';
import style from './Error.module.css';

export default function FormErrors({ formErrors }) {
  return (
    <div className={module.errors}>
      {formErrors?.length > 0 ? (
        <p className={style.errorMessage}>{formErrors}</p>
      ) : null}
    </div>
  );
}
