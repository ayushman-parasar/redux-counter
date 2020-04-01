import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, logging, reset} from "./action"
function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged)
return(
<div>
<h1>{counter}</h1>
<button onClick={()=>dispatch(increment())}>Inc</button>
<button onClick={()=>dispatch(decrement())}>Decc</button>
<button onClick={()=>dispatch(logging())}>Logging</button>
{
  isLogged ? <div>
    <h3>Valuable info i shouldnt see</h3>
    <button onClick={()=>dispatch(reset())}>Reset</button>
  </div> :"log in to reset"
}
</div>
)
}

export default App;
