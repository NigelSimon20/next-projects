'use client';

import React from 'react'
import {useState} from 'react';

interface TenzieButton {
    value: number;
  }

const TenzieButton = ({ value }: TenzieButton) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [active, setActive] = useState(false);
    const handleButtonClick = (value: any) => {
      setActive((oldValue) => !oldValue);
      setCurrentValue(value);
    };
    return (
      <div
        onClick={() => handleButtonClick(value)}
        className={` ${
          active ? 'bg-[#59E391]' : 'bg-white'
        }  flex items-center shadow-sm h-[4rem] text-[#2B283A] text-[1.3rem] font-bold w-[4rem]  rounded-[7px] justify-center `}
      >
        {!active ? value : currentValue}
      </div>
    );
}

export default TenzieButton
