import React from 'react';
import style from './Error.module.css';

export default function FormErrors({ formErrors }: { formErrors: string }) {
  return (
    <div className={style.errors}>
      {formErrors?.length > 0 ? (
        <p className={style.errorMessage}>{formErrors}</p>
      ) : null}
    </div>
  );
}
