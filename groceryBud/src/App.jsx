import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';



function App() {
  const [input, setInput] = useState('');
  const [isEmpty, setEmptyState] = useState(null);
  const [buttonName, setButtonName] = useState('Submit');
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const handleClick = event => {
    event.preventDefault();

    if (input.trim().length !== 0) {
      setEmptyState(false);
    } else{
      setEmptyState(true);
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log (name)
    const date = (name)

    if (name){
      setList((ls)=>[...ls, date])
      setName("")
    }
  }

  return (
    <div>
      <h2>Grocery Hub</h2>

      {
        isEmpty ?
          <p>Please Enter Item To Add To Basket</p> : <p>"{name}" Added to Basket</p>
      }

      <form onSubmit = {handleSubmit}>
          <input id="name" name="name" placeholder = "e.g. Eggs" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="submit" name="buttonSub" value={buttonName}/>
      </form>

      {
        list.map((a)=><div>
          <li>{a.name}</li>
        </div>)
      }
      
    </div>
  );
}

export default App;
