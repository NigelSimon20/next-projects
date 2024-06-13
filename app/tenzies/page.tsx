'use client';
import React, { useEffect, useState } from 'react'
import TenziButton from '../components/TenzieButton';

const Tenzies = () => {
  function randomNumber(min: number = 1, max: number = 6) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function generateTenziValues() {
    const tenziValues = [];
    for (let i = 1; i <= 10; i++) {
      tenziValues.push({ id: i, value: randomNumber() });
    }
    return tenziValues;
  }

  const tenziValues = generateTenziValues();
  const [squares, setSquares] = useState<any>([]);

  useEffect(() => {
    setSquares((tenziValues : any) => {
      return generateTenziValues();
    });
  }, []);

  function handleRoll ( ){
    setSquares(generateTenziValues());
  }

  return (
    <div className="flex items-center justify-center mt-[100px]">
      <div className="flex items-center justify-center bg-[#0B2434] h-[32rem] w-[32rem]">
        <div className="flex items-center flex-col justify-center text-center gap-4 h-[90%] w-[90%] bg-[#F5F5F5] rounded-lg">
          <h2 className="md:font-bold text-[40px] text-[#2B283A]">Tenzies</h2>
          <p className="w-[70%] text-[#2B283A]"> Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="button-container flex gap-4 flex-wrap w-[90%] items-center justify-center ">
            {squares.map((squares : any) => (
              <TenziButton value={squares.value} key={squares.id} />
            ))}
          </div>

          <button
            onClick={ handleRoll}
            className="bg-[#5035FF] pt-3 pb-3 pl-10 pr-10 rounded-[7px]  text-white  font-medium text-[1.2rem] "
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tenzies