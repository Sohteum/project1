import React, { useState } from 'react';
import { useRef } from 'react';

const randomNum = () => Math.floor(Math.random() * 10)

const Compsum = ({ setCnt }) => {
  const [num1, setnNum1] = useState(randomNum())
  const [num2, setnNum2] = useState(randomNum())

  const refInput = useRef()

   
  const fnInpurHandler = function(){
}

  return (
    <>
      <span>{num1}</span>
      +
      <span>{num2}</span>
      =
      <input onInput={fnInpurHandler} type="number" min="0" max="20" />
      <hr />
    </>
  );
};

export default Compsum;