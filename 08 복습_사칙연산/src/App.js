import { useRef, useState } from "react";
import  "./css/style.css"

// 여기서 만들면 좋은점이 랜더링할때 다시 읽지 않으니까 퍼포먼스가 빨라짐


function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [_cnt, _setCnt] = useState(5)
  const [_showModal, _setShowModal] = useState(false)
  const refInput1 = useRef()
  const refInput2 = useRef()

 const onClick = function(e) {
  e.preventDefault()
  const num11 = parseInt(refInput1.current.value)
  const num22 = parseInt(refInput2.current.value)
    setNum1(num11)
    setNum2(num22)
    if(_cnt>=2){
      _setCnt(current=> current-1)
    }else{
      _setShowModal(true)
    }
  }

  return (
    <>
      <form>
        <h1>사칙연산</h1>
        <input ref={refInput1} type="number" min="0" max="9" />
        &nbsp;
        <input ref={refInput2} type="number" min="0" max="9" />
        &nbsp;
        <button onClick={onClick}>결과보기</button>
        {/* 콜백은 여러개 실행할때..할일이 많을때 사용 */}
        <p>남은횟수 : {_cnt}</p>
      </form>
      <hr />
      <p>
        <b>덧셈</b>        &nbsp;
        {num1}+{num2} = {num1+num2}
      </p>
      <p>
        <b>뺄셈</b>        &nbsp;
        {num1}-{num2} ={num1-num2}
      </p>
      <p>
        <b>곱셈</b>        &nbsp;
        {num1}*{num2} ={num1*num2}
      </p>
      <p>
        <b>나눗셈</b>        &nbsp;
        {num1}/{num2} =
        { (0 !== num2) ? num1/num2 : "0으로는 숫자를 나눌 수 없어요"}
      </p>
      {(_showModal)&&<div className="modal">횟수를 다 사용하셨습니다</div>}
      {/* 쇼모달이 구라가아니라면, 즉 쇼모달이 사실이라면 오른쪽에 이걸 보여주겠다
       */}
    </>
  );
}
//리턴...마무리하면서 토해내는거...
export default App;


//하나의 변수가 바뀔때 관련된 변수가 다 바뀐다. 그것이 상태관리