import { useSelector, useDispatch } from 'react-redux'
const About = () => {


    const count = useSelector((state) => state.counter.value)
  return (
    <div>{count}</div>
  )
}

export default About