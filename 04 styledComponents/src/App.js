import { styled } from "styled-components";

function App() {

  const Father = styled.div`
  display:flex;
  `;

  const Box = styled.div`
  background-color:${(props)=> props.bgColor};
  width: 100px;
  height: 100px;
  `

  const Circle = styled(Box)`
  border-radius:50px;
  `

  // const Text = styled.span`
  // color: white;
  // `;

  return (
    <>
      <Father>
        <Box bgColor="teal"></Box>
        <Circle bgColor="whiteSmoke"></Circle>

      </Father>
    </>
  );
}

export default App;
