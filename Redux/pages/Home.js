import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/CounterSlice'
// import styles from './Counter.module.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const navigate = useNavigate()



  console.log(count)
  return (
    <div>
      <h1>HOME</h1>
      <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        

        <button onClick={() => navigate("/about")}>ABOUTTT</button>
      </div>
    </div>
  )
}