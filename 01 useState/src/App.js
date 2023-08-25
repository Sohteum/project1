import { useState } from "react";

function App() {
  let [cnt, setCnt] = useState(1);//cnt와 관련된 모든것이 바뀜

  function fn() {
    setCnt(current=>current+1);//cnt를 바꿀때 cnt를 사용하면 안됨 // 화면이 바뀌면 2로 바꿀 계획
    console.log(cnt);// 화면이 변하기 전에는 1출력. 그래서 화면보다 하나씩 전값이 출력됨(유즈이펙트 사용하기전에는 이렇게 됨)
  }
  return (
    <>
      <h3>1씩증가</h3>
      <p>
        <button onClick={fn}>증가</button>
      </p>
      <p>현재값 : {cnt}</p>
    </>
  );
}

export default App;
