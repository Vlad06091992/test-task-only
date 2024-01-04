import React from "react";
import s from "./prev-button.module.scss";
import { PrevTriangle } from "../../svg/prev-triangle";


export const PrevButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, disabled, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`${s.prevButton} ${disabled ? s.disabled : ""} ${className}`}
    >
      <PrevTriangle />
    </button>
  );
};
