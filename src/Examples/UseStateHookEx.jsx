import {React,useState} from 'react'
import Button from '../components/Button';

export default function UseStateHookEx() {
    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>UseStateHookEx</h1>
      <Button text={"+"} onClick={()=>setCount(count + 1)}/>
      <span>your number is {count}</span>
      <Button text={"-"} onClick={()=>setCount(count - 1)}/>
    </div>
  )
}
