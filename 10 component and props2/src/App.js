import { useState } from "react";
import Compsum from "./components/Compsum";
import CompModal from "./components/CompModal";



function App() {

  const [cnt, setCnt] = useState(0)


  return (
    <>
      <h1>더하기계산</h1>
      <Compsum setCnt={setCnt}/>
      <Compsum setCnt={setCnt}/>
      <Compsum setCnt={setCnt}/>
      <Compsum setCnt={setCnt}/>
      <Compsum setCnt={setCnt}/>
      <button>점수확인</button>
      <CompModal cnt={cnt}/>
    </>
  );
}

export default App;
