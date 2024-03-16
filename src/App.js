//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text,setText] = useState('');
  const [name,setName] = useState('love');

  //cariation-1 --> Every Render
  //useEffect(()=>{
    //console.log("UI Rendering")
  //});


  //variation-2 --> First Render
  //useEffect( () => {
    //console.log("UI Rendering");
  //},[]);


  //variation-3 --> on first render + dependency changes
  //useEffect(()=>{
    //console.log("UI Render responded");
  //},[name]);


  //variation-4 --> to handle unmounting of a component
  useEffect(()=>{ //adding listner
    console.log('listner added');
    return() => { //these will clean first and then adding new listner
      console.log('listner removed');
    }
  },[text]);


  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
