import React from 'react';
import s from './next-button.module.scss'
import { NextTriangle } from "../../svg/next-triangle";

export const NextButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, disabled, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`${s.nextButton} ${disabled ? s.disabled : ''} ${className}`}
    >
      <NextTriangle />
    </button>
  );
};
