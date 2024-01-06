import React from "react";
import s from "./slider-nav-buttons.module.scss";

type Props = {
  isBeginning:boolean
  handlePrevButtonClick:()=>void
  handleNextButtonClick:()=>void
  isEnding:boolean
}

export const SliderNavButtons = ({handlePrevButtonClick,isEnding,isBeginning,handleNextButtonClick}:Props) => {


  return (
    <div >
      <button
        className={`${s.button} ${s.prevButton}`}
        disabled={isBeginning}
        onClick={handlePrevButtonClick}
      >
        <svg style={{ width:'50%', height:'50%', zIndex:10, transform: 'rotate(180deg)',position:'relative',top:'2px',left:'-2px'}} xmlns="http://www.w3.org/2000/svg" width="5px" height="10px" viewBox="0 0 8 12" fill="none">
          <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
        </svg>
      </button>
      <button disabled={isEnding} className={`${s.button} ${s.nextButton}`} onClick={handleNextButtonClick}>
        <svg style={{width:'50%', height:'50%', zIndex:10, margin:'auto'}} xmlns="http://www.w3.org/2000/svg" width="5px" height="10px" viewBox="0 0 8 12" fill="none">
          <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
        </svg>
      </button>
    </div>
  );
};
