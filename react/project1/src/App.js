import MainHeader from './components/MainHeader'
import CustomList from './components/CustomList'
import Button from './components/Button'
import MyButton from './components/MyButton';
import './App.css';
import { useState } from 'react'

function App() {
  const [text, setText] = useState('감추기');
  const buttonClick = () => {
    text === '감추기' ? setText('보이기') : setText('감추기');
  }
  const array1 = ['apple', 'banana', 'orange'];
  return (
    <div className="App">
      {text === '보이기' && <MainHeader/>}
      <ul>
        {array1.map((value, index) => 
            <CustomList text={`${index} ${value}`} key={index}></CustomList>)}
      </ul>
      <Button></Button>
      <MyButton></MyButton>
      <button onClick={buttonClick}>{text}</button>
    </div>
  );
}

export default App;
