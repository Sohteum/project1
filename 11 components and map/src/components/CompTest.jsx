import { useState } from "react";

const CompTest = () => {
  const [login, setLogin] = useState(true)

  const onClick = function () {
    setLogin()
  }

  return (
    <>
      <div>
        <button onClick={onClick}>
          {login ? "logout" : "login"}
        </button>
      </div>
    </>

  );

}

export default CompTest;