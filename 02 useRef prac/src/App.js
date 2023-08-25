import { useRef } from "react";
import { useState } from "react";

function App() {

  let randomNum = () => Math.floor(Math.random() * 9) + 1

  const [n1, setN1] = useState(randomNum())
  const [n2, setN2] = useState(randomNum())
  const [result, setResult] = useState()
  const [point, setPoint] = useState(0)

  const refInput = useRef()

  function submit(e) {
    e.preventDefault()
    let userNum = parseInt(refInput.current.value)
    if (n1 + n2 === userNum) {
      setResult('정답');
      setN1(randomNum())
      setN2(randomNum())
      setPoint(current => current + 1)
    } else {
      setResult('오답');
      if (point >= 1) {
        setPoint(current => current - 1)
      }
    }
    refInput.current.value = '';
  }

  return (
    <>
      <h3>더하기연습</h3>
      <form onSubmit={submit} >
        <input value={n1} type="number" min="1" max="9" readOnly />
        +
        <input value={n2} type="number" min="1" max="9" readOnly />
        =
        <input ref={refInput} type="number" min="0" max="99" />
        {/* value={refInput}을 하면 input값이 입력이 안됨 */}
        <p><button>버튼</button></p>
      </form>
      <p>정답여부 : {result} , 점수 : {point}</p>

    </>
  );
}

export default App;
