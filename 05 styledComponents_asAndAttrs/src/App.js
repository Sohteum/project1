import { styled } from "styled-components";

function App() {

  const Father = styled.div`
  display:flex;
  `;

  // const Box = styled.div`
  // background-color:${(props) => props.bgColor};
  // width: 100px;
  // height: 100px;
  // `

  // const Circle = styled(Box)`
  // border-radius:50px;
  // `

  // const Btn = styled.button`
  // color:white;
  // background-color:tomato;
  // border:0;
  // border-radius:15px;
  // `

  // const Text = styled.span`
  // color: white;
  // `;

  const Input = styled.input.attrs({ required: true, minLength:10 })`
  background-color:tomato;
  `;

  return (
    <>
      <Father as='header'>
        {/* <Btn>Log in</Btn>
        <Btn as='a' href='/'>
          Log in
        </Btn> */}
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />

      </Father>
    </>
  );
}

export default App;
