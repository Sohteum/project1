import { useRef } from "react";
import { useState } from "react";

//컴포넌트끼리 공유해야하는 함수는 밖에서 만들면 안됨. 무조건 안에서 만들어야함. 밖에서 만들면 좋은점 : 
let fnGetRandom = () => Math.floor(Math.random() * 10)

function App() {

  const [num1, setNum1] = useState(fnGetRandom());
  const [num2, setNum2] = useState(fnGetRandom());
  const [result, setResult] = useState('');
  const [point, setPoint] = useState(0);

  //react만의 만들어지지 않은 객체를 찾는방법?
  const refInput = useRef()

  //arrow function은 스코프를 꼭 지정해줘야함

  function fnSubmit(e) {//arrow펑션은 내장함수쓸때 많이 쓰고 내가 만드는 함수는 이런식으로 많이 사용함
    e.preventDefault()
    let userNum = parseInt(refInput.current.value)
    if (num1 * num2 === userNum) {
      setResult('정답')
      setNum1(fnGetRandom());
      setNum2(fnGetRandom());
      setPoint(current => current + 1)
    } else {
      setResult('오답')
      if (point >= 1) {
        setPoint(current => current - 1)

      }
    }
    refInput.current.value = '10';
  }

  return (
    <>
      <h3>구구단연습</h3>
      <form onSubmit={fnSubmit}>
        <input Value={num1} type="number" min="0" max="9" readOnly />
        *
        <input Value={num2} type="number" min="0" max="9" readOnly />
        =
        <input ref={refInput} type="number" min="0" max="99" />
        <button style={{ display: "none" }}>결과</button>
      </form>
      <p className="output">결과 : {result}, 점수 : {point}점</p>
    </>
  );
}


export default App;
