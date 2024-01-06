import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/CounterSlice'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

    const count = useSelector((state) => state.counter.value)
  return (
    <>
    <h1>ABOUT</h1>
    <div>{count}</div>
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

        <button onClick={() => navigate("/")}>HOMEE</button>
    </>
  )
}

export default About