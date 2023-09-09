import { useEffect } from "react";
import CompMenu from "./components/CompMenu";
import axios from "axios";

function App() {

  axios({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php', // 통신할 웹문서
    method: 'get', // 통신할 방식
    data: { // 인자로 보낼 데이터
      foo: 'diary'
    }
  });

  return (
    <>
      <header >
        coctail
      </header>
      <main>
        <input type="text" />
        <button>칵테일검색하기</button>
        <CompMenu />
        <div></div>
      </main>
      <footer>
        카피라이트 뭐시기
      </footer>
    </>
  );
}

export default App;
