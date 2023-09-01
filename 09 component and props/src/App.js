import { useState } from "react";
import Compsum from "./components/Compsum";



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
      <p>총점 : {cnt}</p>
    </>
  );
}

export default App;
