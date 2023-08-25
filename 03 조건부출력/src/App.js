import { useRef } from "react";
import { useState } from "react";

//state와 관련이 없는 함수는 여기서 선언해주면 속도가 더 빨라질 수 있다
// let fnGetrandom = () => {
//   //여기서는 장점이 return을 안해도됨
//   Math.floor(Math.random() * 10)
// }

function fnGetRandom() {
  return Math.floor(Math.random() * 10)
}

function App() {

  const [n1, setN1] = useState(fnGetRandom());
  const [n2, setN2] = useState(fnGetRandom());
  const [point, setPoint] = useState(0);
  const refInput = useRef()

  function fnSubmit(e) {
    e.preventDefault()
    let userNum = parseInt(refInput.current.value)
    if (n1 + n2 === userNum) {
      setPoint(p => p + 1);
      setN1(fnGetRandom());
      setN2(fnGetRandom());
    } else {
      if (point >= 1) {
        setPoint(current => current - 1)
      } else {
        alert('낙방')
      }
    }
    refInput.current.value = '';
  }

  return (
    <>
      <h4>더하기연습</h4>
      <form onSubmit={fnSubmit}>
        <span>{n1}</span>
        +
        <span>{n2}</span>
        =
        <input type="number" min="0" max="99" />
        <button ref={refInput} >버튼</button>
      </form>
      <p>점수 : {point}</p>
      <div className="modal-green">5점만점입니다</div>
    </>
  );
}

export default App;
