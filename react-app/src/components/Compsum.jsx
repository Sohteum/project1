import React, { useState } from 'react';
import { useRef } from 'react';

const randomNum = ()=> Math.floor(Math.random()*10)

const Compsum = () => {
  const [num1, setnNum1] = useState(randomNum())
  const [num2, setnNum2] = useState(randomNum())

  const refInput = useRef()

  const fnOnSubmit = function (e) {
    e.preventDefault()
    let userNum = parseInt(refInput.current.value)
    if(userNum===num1+num2){
      alert('정답')
    }
  }

  return (
    <>
      <form onSubmit={fnOnSubmit}>
        <span>{num1}</span>
        +
        <span>{num2}</span>
        =
        <input ref={refInput} type="number" min="0" max="20" />
        <hr />
      </form>
    </>
  );
};

export default Compsum;