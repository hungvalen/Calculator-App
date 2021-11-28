import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import Wrapper from './components/Wrapper';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]
function App() {
  const [calc,setCalc] = useState({
    sign:"",
    num:0,
    res:0
  })
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  // console.log(`${btn} clicked`)
                  btn === "C" 
                  ? resetClickHandler 
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? operatorClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
                }}
              >

              </Button>
            )
          })
        }
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
