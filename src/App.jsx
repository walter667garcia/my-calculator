import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Clear from './components/Clear';
import Pantalla from './components/Pantalla';
import {evaluate} from 'mathjs';

function App() {

  const [entrada, setEntrada] = useState('');

  const addinput = val => {

    setEntrada(entrada + val)

  };


  const calculaterResult = ()=>{
    if(entrada){
      setEntrada(evaluate(entrada));
    }
   else {
    alert("Favor de ingresar valores para el calculo")
   }

  }


  return (
    <div className="App">

      <div className='title'>
        <h1>My Calculator</h1>
      </div>
      <br />
      <div className='content'>

        <Pantalla input={entrada} />


        <div className='button'>
        <Button driveClick={addinput} >^</Button>
          <Button driveClick={addinput}>%</Button>
          <Button driveClick={addinput}>√</Button>
          <Button driveClick={addinput}>+</Button>
          <Button driveClick={addinput} >7</Button>
          <Button driveClick={addinput}>8</Button>
          <Button driveClick={addinput}>9</Button>
          <Button driveClick={addinput}>/</Button>
          <Button driveClick={addinput}>4</Button>
          <Button driveClick={addinput}>5</Button>
          <Button driveClick={addinput}>6</Button>
          <Button driveClick={addinput}>*</Button>
          <Button driveClick={addinput}>1</Button>
          <Button driveClick={addinput} >2</Button>
          <Button driveClick={addinput}>3</Button>
          <Button driveClick={addinput}>-</Button>
          <Button driveClick={addinput}>0</Button>
          <Button driveClick={addinput}>00</Button>
          <Button driveClick={addinput}>.</Button>
          <Button driveClick={calculaterResult}>=</Button>

        </div>
        <Clear driveClear={()=> setEntrada('')} >CLEAR</Clear>


      </div>


    </div>
  );
}

export default App;
